import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header text-center w-10/12 mx-auto m-3">
            <h1 className="text-5xl font-bold font-mono p-3">Sound Spirit Fest - Choose Your Fav Musicians</h1>
            <h4 className="text-white text-2xl p-3 font-semibold font-mono italic">“HERE’S TO THE NIGHTS THAT TURNED INTO MORNINGS, AND THE FRIENDS THAT TURNED INTO FAMILY”</h4>
            <h2 className="text-red-800 text-3xl font-bold p-3">Total Budget : 200 Million</h2>

        </div>
    );
};

export default Header;