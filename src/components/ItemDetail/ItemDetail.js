import React from "react";
import "./ItemDetail.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        console.log (`Has agregado ${quantity} unidades al carrito.`);
    }

    return(
        <div className="container text-center w-100 detailCont">
            <div className="row justify-content-around align-items-center gap-4 cols-1 cols-xl-2">
                <div className="col w-40">
                    <img className="imageProduct" src={data.image} alt={data.title}/>
                </div>
                <div className="col justify-content-center">
                    <div className="justify-content-center align-item-around bg-dark descriptionCard m-auto">
                        <h2 className="tituloProducto text-bg-dark m-1">{data.title}</h2>
                        <h3 className="text-bg-dark " >$ {data.price}</h3>
                        <p className="text-wrap w-70 bg-white textDescription">{data.description}</p>
                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;