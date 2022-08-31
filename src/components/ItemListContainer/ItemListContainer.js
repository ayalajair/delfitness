import React from "react";
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
        console.log (`Has agregado ${quantity} unidades al carrito.`);
    }
    return (
        <>
        <h2>{greeting}</h2>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer