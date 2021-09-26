import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import Singerlist from '../Singerlist/Singerlist'

const Cart = (props) => {
    console.log(props.cart);
    const { cart, name } = props;

    let totalSelected = 0;
    let total = 0;
    for (const singer of cart) {
        if (!singer.quantity) {
            singer.quantity = 1;
        }
        total = total + singer.per_show_salary * singer.quantity;
        totalSelected = totalSelected + singer.quantity;
    }
    const user = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="cart m-4 bg-white border-4 rounded-lg text-center border-indigo-600">

            <h2 className="singers-count text-white text-3xl font-bold p-2 m-3 border-2 border-indigo-600 bg-indigo-400 rounded-2xl" >{user}  Singers Added : {cart.length} </h2>
            <h2 className="singers-count text-white text-3xl font-bold p-2 m-3 border-2 border-indigo-600 bg-indigo-400 rounded-2xl">Total Cost : {total}</h2>
            <h2 className="singers-count text-white text-2xl font-bold p-2 mx-3 mt-7 border-2 border-red-700 bg-red-400 rounded-2xl">Your Favourite List</h2>
            {
                name.map(name => <Singerlist
                    key={name}
                    name={name}
                ></Singerlist>)
            }
            <button className="singers-count text-white text-xl font-bold p-2 m-3 border-2 border-indigo-600 bg-indigo-400 rounded-2xl">Submit Opinion</button>
        </div>
    );
};

export default Cart;