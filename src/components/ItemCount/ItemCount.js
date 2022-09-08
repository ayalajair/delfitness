import React, {useState} from "react";
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial, stock, onAdd})=> {
    const [counter, setCounter] = useState (initial);

    const handlerCounterDown = () => {
        if (counter>0) {
            setCounter(counter - 1);
        }
    };
    const handlerCounterUp = () => {
        if (counter<stock) {
            setCounter(counter + 1);
        }
    };

    return (
        <div className="itemCounter text-bg-light">
            <div>
                <button className="btn btn-outline-dark btnControls" onClick={handlerCounterDown}>-</button>
                <span>{counter}</span>
                <button className="btn btn-outline-dark btnControls" onClick={handlerCounterUp}>+</button>
            </div>
            <div>
                <button className="btn btn-dark" disabled= {counter<=0} onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;
