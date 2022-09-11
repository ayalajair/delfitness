import React, {useState, useContext} from "react";
import "./ItemDetail.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";



const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState (false);

    const {addProduct} =useContext(CartContext);

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct (data, quantity);
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
                        {goToCart ? <Link to='/cart'><button className="btn btn-outline-light button mb-4">Finalizar compra</button></Link>
                        : <ItemCount initial={0} stock={data.stock} onAdd={onAdd}/>}
                        <p className="text-bg-dark">{`Stock: ${data.stock} unidades`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;