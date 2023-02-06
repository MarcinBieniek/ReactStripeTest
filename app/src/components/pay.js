import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Key = "pk_test_51MXqISIQal6Htbko0cj1yHpsa0jl4M0KSWlP1GbXy3hOoj4fame0CzzeswURBrvOl8WqIaSHkTN7rAfRYFBP0Se7007q8x5ws6"

const Pay = () => {
  
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate();

  console.log('stripetoken is', stripeToken)

  const onToken = (token) => {
    setStripeToken(token);
    console.log('token is', token)
    
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8083/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log('resdatais', res.data);
        navigate("/success");
      } catch(err){
        console.log('error is', err)
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div> 
        {stripeToken ? (<span>Processing. Please wait</span>) :  
        <StripeCheckout 
            name="Runner."
            billingAddress
            shippingAddress 
            description="Your total is 20$"
            amount={2000}
            token={onToken}
            stripeKey={Key}
            >
                <button>Pay</button>
        </StripeCheckout>}
    </div>
  )
}

export default Pay
