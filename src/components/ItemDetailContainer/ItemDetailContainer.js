import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

const product = {id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ad1-1ae824ed7d318d717716050381274204-480-0.jpg", title:"Xtrenght Advanced Whey Protein 1 Kg", price:5720, description: "Es el blend de whey protein con mejor calidad y pureza del mercado, gracias a que contiene Whey Protein Isolate (WPI), la proteína de suero de mayor pureza a nivel mundial, Whey Protein Hydrolysate (WPH), la de asimilación más rápida y Whey Protein Concentrate (WPC), la más equilibrada. Juntas son una combinación perfecta, resultando un producto de enorme calidad, con elevada asimilación asegurándote una rápida recuperación y crecimiento muscular."};

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve (product);
            }, 2000);
        });
        getData.then (res=> setData (res));
    }, [])
    

    return(
        <ItemDetail data={data}/>
    )
};

export default ItemDetailContainer;