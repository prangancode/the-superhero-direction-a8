import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faMusic, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './Singers.css'

const Singers = (props) => {
    const { img, name, famous_as, birth_date, famous_song, per_show_salary } = props.singer;
    const element = <FontAwesomeIcon icon={faList} />
    const famusic = <FontAwesomeIcon icon={faMusic} size="2x" />
    const faplaycircle = <FontAwesomeIcon icon={faPlayCircle} size="2x" />
    return (
        <div className="singers m-2 bg-white border-4 border-indigo-500 rounded-lg text-center">
            <div>
                <div className="center">
                    <img src={img} alt="" />
                </div>
                <div className="mt-3">
                    <h2 className="p-1 text-blue-700 font-bold text-xl">Name : {name}</h2>
                    <h4 className="p-1 text-blue-600 font-semibold text">Birth Date : {birth_date}</h4>
                    <h4 className="p-1 text-blue-500 font-semibold text">Famous As : {famous_as}</h4>
                    <h4 className="p-1 text-blue-600 font-semibold text">Famous Song : {famous_song}</h4>
                    <h4 className="p-1 text-blue-500 font-semibold text">Salary Per Show : {per_show_salary}</h4>
                </div>

                <button className="add-btn"
                    onClick={() => props.addToCart(props.singer)}
                >{element} Add to List</button>

                <div>
                    <span className="mx-10">{famusic}</span>
                    <span className="mx-10">{faplaycircle}</span>
                </div>

            </div>


        </div>
    );
};

export default Singers;