import React, { createContext, useState }   from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartContext = createContext ([]);

const CartProvider = ({children}) => {
    const notify = (item) => toast(`${item.title} se ha agregado al carrito`);

    const [cart, setCart] = useState ([]);

    const clear = () => setCart([]);

    const isInCart =(id) => cart.find (product => product.id === id) ? true : false;

    const removeItem = (id) => cart.filter (product => product.id !== id);

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
        <CartContext.Provider value= {{clear,isInCart,removeItem, addProduct}}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider