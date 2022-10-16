import React, {useState, useEffect} from "react";
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from '../../Firebase/firebaseConfig'

// FIREBASE
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    const {categoryId} = useParams ();

    useEffect(() => {
        const productsCollection = collection (db, 'products');


        if (categoryId){
            const productsFilter = query (productsCollection, where('category', '==', categoryId ))
            getDocs (productsFilter)
            .then (res => {
                setData (res.docs.map((product) => ({ id: product.id, ...product.data() })));
            })
        } else {
            getDocs (productsCollection)
            .then (res=> setData (res.docs.map(product => ({id:product.id,...product.data()}))))
        }
    }, [categoryId])
    


    return (
        <>
        <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <ItemList data={data}/>
        </div>
        </>
    )
}

export default ItemListContainer