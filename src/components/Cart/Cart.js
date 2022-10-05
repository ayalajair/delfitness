import React, {useState} from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from '../../Firebase/firebaseConfig'
import { addDoc, collection } from "firebase/firestore";

const Cart = () => {
    const{cart, totalCart} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("");


    const handleClick = () => {
        const orderCollection = collection (db, 'orders');
        addDoc (orderCollection, {
            buyer: {
                name: 'Jair',
                mail: 'ayalajair@gmail.com',
                phone: '12356548',
                adress: 'calle falsa 1234'
            },
            items: cart.map (product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
            total: totalCart()
        }).then ((res) => setIdOrder (res.id))
        

    }

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
            <p className="fs-3 fw-bold ">Total: ${totalCart()}</p>
            <button onClick={handleClick}>Finalizar compra</button>
        </div>
    )
}

export default Cart