import React from "react";
import './CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = ()=> {
    const {totalQuantity} = useContext(CartContext);
    return ( 
        <div>
            <i className="bi bi-cart" style={{color:"#fff"} }> </i>
            <p className="text-light">{totalQuantity() === 0 ? '':totalQuantity()}</p>
        </div>
    )
}

export default CartWidget;

