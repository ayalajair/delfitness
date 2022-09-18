import React, { createContext, useState }   from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartContext = createContext ([]);

const CartProvider = ({children}) => {
    const notify = (item) => toast(`${item.title} se ha agregado al carrito`);

    const [cart, setCart] = useState ([]);

    const totalCart = () => {
        return cart.reduce ((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalQuantity = () => cart.reduce ((acc,actProd)=> acc + actProd.quantity,0);

    const clear = () => setCart([]);

    const isInCart =(id) => cart.find (product => product.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter (product => product.id !== id));

    const addProduct = (item, quantity) => {
        if (isInCart (item.id)) {
            notify(item)
            setCart (cart.map (product => { 
                return product.id === item.id ? {...product, quantity:product.quantity + quantity}:product
            }));
        } else {
            notify(item)
            setCart ([...cart, {...item, quantity }]);
        }
    }
    console.log (cart);



    return (
        <CartContext.Provider value= {{clear,isInCart, removeItem, addProduct, totalCart, totalQuantity, cart}}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider