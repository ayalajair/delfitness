import React from "react";
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Item = ({detail}) => {
    return (
        <div className="col  w-15 d-flex justify-content-around">
            <div className="card text-bg-light m-4 productCard">
                <Link to={`/detail/${detail.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={detail.image} className="card-img-top productImage" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">$ {detail.price}</h5>
                    <p className="card-text">{detail.title}</p>
                </div>
                </Link>
            </div>
        </div>
    );

}

export default Item;