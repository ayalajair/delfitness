import React, {useState, useEffect} from "react";
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const products = [
    {id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ad1-1ae824ed7d318d717716050381274204-480-0.jpg", title:"Xtrenght Advanced Whey Protein 1 Kg", price:5720},
    {id: 2, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/79001-2ff697ab89dc00e5e416370686424715-480-0.jpg", title:"ENA SPORT True Made Whey Protein 1 kg", price:5065},
    {id: 3, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ena_whey_protein_true_made1-27922783b78fa545d216051172622753-480-0.jpg", title:"Gentech whey protein 7900 1kg", price:3555}
];

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState ([]);

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        })
        getData.then(res=>setData(res));
    }, [])
    

    const onAdd = (quantity) => {
        console.log (`Has agregado ${quantity} unidades al carrito.`);
    }
    return (
        <>
        <h2>{greeting}</h2>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <ItemList data={data}/>
        </div>
        </>
    )
}

export default ItemListContainer