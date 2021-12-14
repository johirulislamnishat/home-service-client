import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Authentication/Hooks/useAuth';

const Checkout = ({ payAppointment }) => {

    const { price, patient_name, _id } = payAppointment;

    const { user } = useAuth();

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleOnSubmit = async (e) => {

        //prevent page reload
        e.preventDefault();

        //truthy checking
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true);
        // Card Element with Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.massage);
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient_name,
                        email: user.email,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.massage);
            setSuccess('');
        } else {
            setError('');
            setSuccess('Congratulations!!! Payment Successful');
            setProcessing(false);
            // console.log(paymentIntent)
            //save payment info to database

            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transactionId: paymentIntent.client_secret.slice('_secret')[0]
            }

            const url = `http://localhost:5000/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? (<CircularProgress />) : (
                        <button type="submit" disabled={!stripe || success}>
                            Pay
                        </button>)
                }
            </form>

            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }

            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }

            <Link to='/dashboard/cardInfo'>See Card Details</Link>
        </div>
    );
};

export default Checkout;