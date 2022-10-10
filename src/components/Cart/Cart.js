import './Cart.css'
import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../Form/Form';

const Cart = () => {
    const{cart, totalCart} = useContext(CartContext);
    

    
        

    return (
        <div>
            {cart.length === 0 ? (
            <div className='cartContainer'>
                <h3 className='empty'>El carrito está vacio</h3>
                <Link to='/'><button className='btn btn-dark m-4'>Volver al Inico</button></Link>
            </div>
            ): (
            <div className='cartContainer'>
            {cart.map (product => <ItemCart key={product.id} product={product}/>)} 
            <p className="fs-3 fw-bold ">Total: ${totalCart()}</p>
            </div>)}
            <Form/>
        </div>
    )
}

export default Cart