import React from "react";
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const item = () => {
    return (
        <div class="col">
            <div class="card">
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ad1-1ae824ed7d318d717716050381274204-480-0.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Titulo</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );

}

export default item;