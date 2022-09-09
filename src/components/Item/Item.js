import React from "react";
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {CartContex} from "../CartContext/CartContext";

const Item = ({detail}) => {
    return (
        <div className="col  w-25">
            <div className="card border-dark text-bg-dark mt-4">
                <Link to={`/detail/${detail.id}`}>
                <img src={detail.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text">$ {detail.price}</p>
                </div>
                </Link>
            </div>
        </div>
    );

}

export default Item;