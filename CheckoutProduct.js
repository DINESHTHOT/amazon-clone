import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

export default function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove items frm basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
            
        })


    }


  return (
    <div className='checkoutProduct'>
        <img className='checkoutpro_image'   src={image}/>


        <div className='checkoutpro_info'>
            <p className='checkoutpro_title'>{title}</p>
            <p className='checkoutpro_price'>
                  <small>$</small>
                  <strong>{price}</strong>
            </p>
            <div className='checkoutpro_rating'>
                    {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>

                ))}

            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>

        </div>


    </div>
  )
}
