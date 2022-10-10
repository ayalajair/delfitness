import React from "react";
import { useForm } from "react-hook-form";
import './Form.css';
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//CONTEXT
import { CartContext } from "../CartContext/CartContext";
//FIREBASE
import {db} from '../../Firebase/firebaseConfig'
import { addDoc, collection } from "firebase/firestore";



const Form = () => {
    //CART Y FUNCIONES DEL CONTEXT
    const{cart, totalCart,clear} = useContext(CartContext);
    //NOTIFICACION DE COMPRA EXITOSA
    const notifySale = (data)=> {
        toast.success (`${data.name}Tu compra con se ha realizado con éxito.`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        clear ();
    }
    //FUNCIONES REACT HOOK FORM
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //SE SETEAN LOS ESTADOS
    const [email, setEmail] = useState ("");
    const [name, setName] = useState ("");
    const [id, setId] = useState ("");
    const [saleSucces, setSaleSucces] = useState(true)

    //FUNCION QUE ENVIA LA ORDEN DE COMPRA AL FIRESTORE
    const sendData = (data, e) => {
        e.preventDefault()
        const orderCollection = collection (db, 'orders');
        addDoc (orderCollection, {
            buyer: {
                name: data.name,
                mail: data.email,
                phone: data.phone,
            },
            items: cart.map (product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
            total: totalCart()
        }).then ((res)=>{setId (res.id)})
        setEmail (data.email);
        setName (data.name)
        notifySale(data);
        setSaleSucces (false);
    }

    //RENDERIZADO DEL FORM
    if (saleSucces) {
            return (
                <div className="formContainer">
                    <h3 className="saleTitle">Necesitamos tus datos para continuar la compra:</h3>
        <form  onSubmit={handleSubmit(sendData)}> 
        <input className="form-control form-control-lg"
            type="text"
            name="name"
            placeholder="Nombre"
            {...register("name", {
                required: { value: true, message: "Tienes que colocar tu nombre" },
                minLength: {value: 3, message: "Tu nombre debe tener al menos 3 caracteres",},
            })}
            />
        <span className="text-danger text-small d-block mb-2">
            {errors?.name?.message}
        </span>
        <input className="form-control form-control-lg"
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", {
                required: { value: true, message: "Tienes que colocar tu email" },
                minLength: {value: 3, message: "El email debe tener al menos 3 caracteres",},
                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message: "El email no es válido",},
            })}
            />
        <span className="text-danger text-small d-block mb-2">
            {errors?.email?.message}
        </span>
        
        <input className="form-control form-control-lg"
            type="number"
            name="phone"
            placeholder="Telefono"
            {...register("phone", {
                required: {value: true, message: "Tienes que colocar tu teléfono",},
                minLength: {value: 8, message: "El telefono debe tener al menos 8 números",
            },
        })}
        />
            <span className="text-danger text-small d-block mb-2">
                {errors?.telefono?.message}
            </span>
        <button className="btn btn-dark mb-3">Finalizar compra</button>
        </form>
    </div>

    )} 
    else  { 
            return (
                <div className="formContainer">
                    <p>{`${name} nos comunicaremos a tu casilla de correo ${email} para seguir con tu compra`}</p>
                    <p>{`Id de la compra: ${id}`}</p>
                    <ToastContainer/>
                </div>
            )} 
}   


export default Form;