import React from "react";
import './ItemCart.css';
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCart = ({product}) => {
    const {removeItem} = useContext (CartContext);
    return (
        <div className="cartProduct">
                <img className="img" src={product.image} alt={product.title}/>
            <div>
                <p className="fs-3 fw-bold">{product.title}</p>
                <p className="fs-6">Cantidad: {product.quantity}</p>
                <p className="fs-4 fw-bold">Precio: ${product.price} </p>
                <p>Subtotal: ${product.quantity * product.price}</p>
            </div>
            <button className="btn btn-light m3" onClick={()=>removeItem(product.id)}>X</button>
        </div>
    )

}

export default ItemCart;