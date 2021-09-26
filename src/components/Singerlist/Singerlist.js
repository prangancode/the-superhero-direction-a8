import React from 'react';

const Singerlist = (props) => {
    const { name } = props
    return (
        <div className="singers-count text-white text-xl font-bold py-2 px-3 m-3 border-2 border-green-500 bg-green-300 rounded-2xl">
            <h3>{name}</h3>
        </div>
    );


};

export default Singerlist;