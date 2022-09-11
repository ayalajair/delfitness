import React, { createContext, useState }   from "react";
export const CartContext = createContext ([]);



const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([]);

    const clear = () => setCart([]);

    const isInCart =(id) => cart.find (product => product.id === id) ? true : false;

    const removeItem = (id) => cart.filter (product => product.id !== id);

    const addProduct = (item, quantity) => {
        if (isInCart (item.id)) {
            setCart (cart.map (product => { 
                return product.id === item.id ? {...product, quantity:product.quantity + quantity}:product
            }));
        } else {
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