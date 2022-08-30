import React, {useState} from "react";
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ()=> {
    const [counter, setCounter] = useState (0);

    const handlerCounterDown = () => {
        if (counter>0) {
            setCounter(counter - 1);
        }
    };
    const handlerCounterUp = () => {
        if (counter<10) {
            setCounter(counter + 1);
        }
    };

    return (
        <div className="itemCounter">
            <button className="btn btn-outline-dark" onClick={handlerCounterDown}>-</button>
            <span>{counter}</span>
            <button className="btn btn-outline-dark" onClick={handlerCounterUp}>+</button>
            <div>
                <button className="btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;
