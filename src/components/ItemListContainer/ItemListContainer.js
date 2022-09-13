import React, {useState, useEffect} from "react";
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const products = [
    {id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ad1-1ae824ed7d318d717716050381274204-480-0.jpg", title:"Xtrenght Advanced Whey Protein 1 Kg", price:5720, category:"suplementos"},
    {id: 2, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/79001-2ff697ab89dc00e5e416370686424715-480-0.jpg", title:"Gentech whey protein 7900 1kg", price:5065, category:"suplementos"},
    {id: 3, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ena_whey_protein_true_made1-27922783b78fa545d216051172622753-480-0.jpg", title:"ENA SPORT True Made Whey Protein 1 kg", price:3555, category:"suplementos"},
    {id: 4, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/diseno-sin-titulo-871-e28426869376fad44916388871673721-640-0.png", title:"Sporto Antiparras Ibiza", price:1270, category:"accesorios"},
    {id: 5, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/images-11-cbe0d7ea25dc69e60b16220599247952-640-0.jpg", title:"Proyec Kit de banda circulares de tela", price:1920, category:"accesorios"},
    {id: 6, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/diseno-sin-titulo-2022-03-04t175552-6961-b91a07e11dc0f0201616464274173235-640-0.png", title:"Soga Cable Acero", price:580, category:"accesorios"},
    {id: 7, image:"https://static.dafiti.com.ar/p/puma-2700-066566-1-zoom.jpg", title:"Campera Azul Puma Full Zip Hoodie", price:12999, category:"indumentaria"},
    {id: 8, image:"https://static.dafiti.com.ar/p/adidas-1283-285569-1-zoom.jpg", title:"Conjunto Negro Adidas - Essential Small Logo", price:20999, category:"indumentaria"},
    {id: 9, image:"https://static.dafiti.com.ar/p/adidas-2950-040459-1-zoom.jpg", title:"Remera Verde adidas Gradient Tech", price:12.999, category:"indumentaria"},

];

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    const {categoryId} = useParams ();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        })
        if (categoryId) {

            getData.then(res=>setData(res.filter(products => products.category === categoryId)));
        } else {
            getData.then(res=>setData(res));
        }
        // eslint-disable-next-line
    }, [categoryId])
    


    return (
        <>
        <div className="row justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
        <ItemList data={data}/>
        </div>
        </>
    )
}

export default ItemListContainer