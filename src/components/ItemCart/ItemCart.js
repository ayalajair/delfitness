import React from "react";
import './ItemCart.css';
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


const ItemCart = ({product}) => {
    const {removeItem} = useContext (CartContext);
    return (
        <div>
            <img src={product.image} alt={product.title}/>
            <div>
                <p>{product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unitario: ${product.price} </p>
                <p>Subtotal: ${product.quantity * product.price}</p>
            </div>
            <button onClick={()=>removeItem(product.id)}>X</button>
        </div>
    )

}

export default ItemCart;