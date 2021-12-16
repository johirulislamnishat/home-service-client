import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51K4KeVHmwXD3allHMy2hiY7ukFY5i4Xn7AspcQs5qY36m8JrCw51WrkUQfj4GWFIkx7u0KK3o7jTF5ADxUBlCyUK00vdx6hhVm');

const Payment = () => {

    const { serviceId } = useParams();
    const [payService, setPayService] = useState({});

    // console.log(serviceId)

    useEffect(() => {
        fetch(`http://localhost:5000/bookedServices/${serviceId}`)
            .then(res => res.json())
            .then(data => setPayService(data))
    }, [serviceId])

    return (
        <div style={{ marginTop: 30 }}>
            <div style={{ textAlign: 'center' }} className='text-main'>
                <h3>
                    Hello!! {payService.clientName}
                </h3>
                <h6>
                    <span>Please Pay Amount Total:</span> {payService.price}
                </h6>
            </div>

            {payService?.price && (
                <Elements stripe={stripePromise}>
                    <Checkout payService={payService} />
                </Elements>)
            }

        </div>
    );
};

export default Payment;