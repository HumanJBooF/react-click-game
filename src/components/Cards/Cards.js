import React from 'react';

const Cards = props => (
    <div className='col s2 l2'>
        <div className='card'>
            <div className='card-image'>
                <img src={props.image} className='responsive-img' alt={props.name}></img>
            </div>
        </div>
    </div>
);

export default Cards;