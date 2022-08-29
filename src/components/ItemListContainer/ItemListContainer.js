import React from "react";
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <h2>{greeting}</h2>
        <ItemCount/>
        </>
    )
}

export default ItemListContainer