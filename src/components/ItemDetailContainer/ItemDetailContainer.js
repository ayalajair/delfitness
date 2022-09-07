import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

const products = [
    {id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ad1-1ae824ed7d318d717716050381274204-480-0.jpg", title:"Xtrenght Advanced Whey Protein 1 Kg", price:5720, category:"suplementos", description:"Es el blend de whey protein con mejor calidad y pureza del mercado, gracias a que contiene Whey Protein Isolate (WPI), la proteína de suero de mayor pureza a nivel mundial, Whey Protein Hydrolysate (WPH), la de asimilación más rápida y Whey Protein Concentrate (WPC), la más equilibrada. Juntas son una combinación perfecta, resultando un producto de enorme calidad, con elevada asimilación asegurándote una rápida recuperación y crecimiento muscular."},
    {id: 2, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/79001-2ff697ab89dc00e5e416370686424715-480-0.jpg", title:"ENA SPORT True Made Whey Protein 1 kg", price:5065, category:"suplementos", description:"Whey Protein Isolate (WPI) es la forma más pura de proteína de suero que existe actualmente. Al sumarla a nuestra fórmula clásica (WPC + WPI) elevamos el estándar de calidad, asegurándote un mejor producto en cada scoop para que logres la performance que buscas."},
    {id: 3, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/ena_whey_protein_true_made1-27922783b78fa545d216051172622753-480-0.jpg", title:"Gentech whey protein 7900 1kg", price:3555, category:"suplementos", description:"La proteína de suero de leche, también conocida como whey protein, es uno de los suplementos más utilizados cuando el objetivo es aumentar masa muscular o hipertrofiar. ¿La razón? Son una excelente fuente de aminoácidos esenciales (contiene 9) y elevan los aminoácidos."},
    {id: 4, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/diseno-sin-titulo-871-e28426869376fad44916388871673721-640-0.png", title:"Sporto Antiparras Ibiza", price:1270, category:"accesorios", description:"Antiparra con tratamiento Anti-fog para evitar que se empañen mientras nadas. Posee correa de silicona doble, lo cual favorece a poder ajustarse la misma con mayor facilidad. Incluye 3 puentes flexibles de distintos tamaños para lograr la mejor adaptación posible. Cuenta con lentes que permiten una excelente visión bajo el agua."},
    {id: 5, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/images-11-cbe0d7ea25dc69e60b16220599247952-640-0.jpg", title:"Proyec Kit de banda circulares de tela", price:1920, category:"accesorios", description:"Medida: 33 x 8 centímétros.\n Ideal para trabajos de activación.\n Durabilidad: fabricadas de tela tejida con fibras elásticas únicas para brindar una amplia gama de movimientos. \n Comfortable: La tela es fuerte pero suave para la piel."},
    {id: 6, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/583/512/products/diseno-sin-titulo-2022-03-04t175552-6961-b91a07e11dc0f0201616464274173235-640-0.png", title:"Soga Cable Acero", price:580, category:"accesorios", description:"Características principales:\n - Longitud: 2,75 metros\n -Longitud del mango: 11cm \n - Material Mango: PVC. \n -Material cuerda: Acero/Cubierta de polímero. \n -Regulable"},
    {id: 7, image:"https://static.dafiti.com.ar/p/puma-2700-066566-1-zoom.jpg", title:"Campera Azul Puma Full Zip Hoodie", price:12999, category:"indumentaria", description:"Composición: Algodón - Poliéster - Elastano. Detalles: Tejido repelente a la humedad, Líneas de corte Evostripe para mejorar la flexibilidad y el movimiento"},
    {id: 8, image:"https://static.dafiti.com.ar/p/adidas-1283-285569-1-zoom.jpg", title:"Conjunto Negro Adidas - Essential Small Logo", price:20999, category:"indumentaria", description:"El chándal adidas Primegreen Essentials Small Logo está confeccionado con un suave tejido de punto brillante que te ofrece una gran comodidad mientras juegas un partido improvisado con amigos, sales a comer o entrenas en el gimnasio. Este producto se ha fabricado con Primegreen, una combinación de materiales reciclados de alto rendimiento."},
    {id: 9, image:"https://static.dafiti.com.ar/p/adidas-2950-040459-1-zoom.jpg", title:"Remera Verde adidas Gradient Tech", price:12.999, category:"indumentaria", description:"SACÁ EL MÁXIMO PARTIDO A TU ENTRENAMIENTO. Entrená al máximo con esta Remera de colores en degradé. Se ha confeccionado en un tejido ligero que mantiene la piel seca para que puedas concentrarte en tu entrenamiento con saco o en tu rutina de pesas. Las costuras estratégicamente situadas evitan las rozaduras durante las largas sesiones de entrenamiento."},

];

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {id} = useParams ();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve (products);
            }, 2000);
        });
        getData.then (res=> setData (res.find (products=> products.id === parseInt(id))));
    // eslint-disable-next-line
    }, [])
    

    return(
        <>
        <ItemDetail data={data}/>
        </>
    )
};

export default ItemDetailContainer;