import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal'
import { useStateValue } from '../StateProvider/StateProvider';

const Checkout = () => {
    const[{basket},dispatch]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map((item,i)=>(
                        <CheckoutProduct                
                        id={item.id}
                        // id={i}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout