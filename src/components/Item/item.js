import React from "react";
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({detail}) => {
    return (
        <div className="col">
            <div className="card border-dark text-bg-dark mb-3">
                <img src={detail.image} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text">$ {detail.price}</p>
                </div>
            </div>
        </div>
    );

}

export default Item;