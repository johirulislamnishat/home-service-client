import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51K4KeVHmwXD3allHMy2hiY7ukFY5i4Xn7AspcQs5qY36m8JrCw51WrkUQfj4GWFIkx7u0KK3o7jTF5ADxUBlCyUK00vdx6hhVm');

const Payment = () => {

    const { appointmentId } = useParams();
    const [payAppointment, setPayAppointment] = useState({});

    // console.log(appointmentId)

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setPayAppointment(data))
    }, [appointmentId])

    return (
        <div >
            Tk de: {payAppointment.patient_name}
            <span>Tk de</span> {payAppointment.price}

            {payAppointment?.price && (
                <Elements stripe={stripePromise}>
                    <Checkout payAppointment={payAppointment} />
                </Elements>)
            }

        </div>
    );
};

export default Payment;