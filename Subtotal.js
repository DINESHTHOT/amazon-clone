import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

export default function Subtotal() {
  const [{basket},dispatch] = useStateValue();


  return (
    <div className='subtotal'>
    
      <CurrencyFormat
      renderText={(value) =>(
       <>
       <p>
        {/*Homework*/}
        
        Subtotal ({basket.length} items): <strong>{value}</strong> 

       </p>
       <small className='subtotal_gift'>
        <input type="checkbox" />This order contains 
        a gift
       </small>
       
      
       </>
      
   )}

     decimalScale={2}
     value = {getBasketTotal(basket)}           //homework
     displayType={"text"}
     thousandSeparator={true}
     prefix={"$"}

         
      
      />

      <button>Proceed to Checkout</button>




    </div>
  )
}
