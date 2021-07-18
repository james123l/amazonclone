import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider/StateProvider'

const Product = ({id,title,image,price,rating}) => {
    const[{basket},dispatch]=useStateValue();

    const addToBasket=()=>{
        //dispatch something to data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product">
           <div className="product__info">
            <p>{title}</p>   
            <p className="product__price"> 
                <small>$</small>
                <strong>{price}</strong>
             </p> 
             <div className="product__rating">
                 {/* map里，_ lodash 用于简化迭代。类似于object。 i是迭代的索引 */}
                 {Array(rating).map((_,i)=>(<p id={i}>🌟</p>))}
             </div>
            </div> 
            <img src={image}/>
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product
