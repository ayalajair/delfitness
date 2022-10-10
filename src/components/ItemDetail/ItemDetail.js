import React, {useState, useContext} from "react";
import "./ItemDetail.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";



const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart, ] = useState (false);

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
                    <div className="justify-content-center align-item-around text-bg-light descriptionCard m-auto">
                        <h3 className="tituloProducto m-1">{data.title}</h3>
                        <h2>$ {data.price}</h2>
                        <p className="text-wrap w-70 textDescription">{data.description}</p>
                        {goToCart ? <Link to='/cart'><button className="btn btn-dark button mb-4">Ir al carrito</button></Link>
                        : <ItemCount initial={0} stock={data.stock} onAdd={onAdd}/>}
                        <p>{`Stock: ${data.stock} unidades`}</p>
                        <ToastContainer 
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;