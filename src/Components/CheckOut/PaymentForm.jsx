import React from 'react'
import Review from './Review';
import { Typography, Button, Divider } from '@material-ui/core';

import { loadStripe } from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({checkoutToken, backStep,nextStep,shippingData,onCaptureCheckout, timeOut}) => {
    const handleSubmit =  async ({event, elements, stripe}) => {
        event.preventDefault();
        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const {error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        if (error) {
            console.log('[error]', error);
          } 
          else
          {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.state, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                
                payment: {
                  gateway: 'stripe',
                  stripe: {
                    payment_method_id: paymentMethod.id,
                  },
                },
          }
          onCaptureCheckout(checkoutToken.id, orderData);
          timeOut();
          nextStep();
        }
    }
    return (
        <div>
        <Review checkoutToken={checkoutToken}/>
        <Divider/>
        <Typography variant="h6" gutterBottom> Payment methods: </Typography>
        <Elements stripe= {stripePromise}>
        <ElementsConsumer>
            {({elements, stripe}) => (
                    <form onSubmit= {(e) => handleSubmit(e,elements,stripe)}>
                    <CardElement />
                        <br/> <br/>
                        <div style = {{display:'flex', justifyContent:'space-between'}}>
                            <Button variant="outlined" onClick={backStep}> Back</Button>
                            <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                            </Button>
                        </div>

                        
                    </form>
            )
            }
        </ElementsConsumer>

        </Elements>
           
        </div>
    )
}

export default PaymentForm
