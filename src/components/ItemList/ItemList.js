import React from "react";
import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({data})=>{
    return (
            data.map(product=><Item key={product.id} detail={product}/>)       
    );
} 

export default ItemList