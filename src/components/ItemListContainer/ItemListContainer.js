import React from "react";
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({greeting}) => {
    return (
        <h2>{greeting}</h2>
    )
}

export default ItemListContainer