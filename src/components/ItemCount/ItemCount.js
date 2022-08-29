import React, {useState} from "react";
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ()=> {

    return (
        <div className="itemCounter">
            <button className="btn btn-outline-dark">-</button>
            <span>0</span>
            <button className="btn btn-outline-dark">+</button>
            <div>
                <button className="btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;
