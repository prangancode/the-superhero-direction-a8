import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers'
import './Festival.css'

const Festival = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, [])

    const addToCart = (singer) => {
        const newCart = [...cart, singer];
        const newName = [...name, singer.name];
        setCart(newCart);
        setName(newName);

    }
    return (
        <div className="festival-container w-10/12 mx-auto">
            <div className="singers-container p-3">
                {
                    singers.map(singer => <Singers
                        key={singer.name}
                        singer={singer}
                        addToCart={addToCart}
                    ></Singers>)}
            </div>
            <div className="cart-container p-3">

                <Cart cart={cart} name={name}></Cart>
            </div>
        </div>
    );
};

export default Festival;