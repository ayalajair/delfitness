import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
// FIREBASE
import { getFirestore, doc, getDoc } from 'firebase/firestore';




const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {id} = useParams ()
    

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb , 'products', {id});
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