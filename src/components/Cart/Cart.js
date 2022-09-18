import React from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
const Cart = () => {
    const{cart, totalCart} = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div>
                <h3>El carrito está vacio</h3>
                <Link to='/'><button>Volver al Inico</button></Link>
            </div>
        )
    };
    return (
        <div>
            {cart.map (product => <ItemCart key={product.id} product={product}/>)} 
            <p>Total: {totalCart()}</p>
        </div>
    )
}

export default Cart