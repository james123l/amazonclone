import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider'
import "./CheckoutProduct.css"



const CheckoutProduct = ({id,image,title,price,rating}) => {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutpRoduct__info">
                <p className="checkout__title">{title}</p>
                <p className="checkout__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).map((_,i)=>(
                        <p id={i}>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
