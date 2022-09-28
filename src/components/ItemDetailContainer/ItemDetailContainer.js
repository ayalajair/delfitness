import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
// FIREBASE
import { doc, getDoc, collection } from 'firebase/firestore';
import {db} from '../../Firebase/firebaseConfig'




const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {id} = useParams ()
    

    useEffect(() => {
        const productsCollection = collection (db, 'products')
        const queryDoc = doc(productsCollection, id);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
        // eslint-disable-next-line
    }, []);
    

    return(
        <>
        <ItemDetail data={data}/>
        </>
    )
};

export default ItemDetailContainer;