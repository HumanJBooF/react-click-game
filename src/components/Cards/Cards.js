import React from 'react';
import styles from './styles';

const Cards = props => (
    <div className='col s6 m6 l3'>
        <div className='card hoverable' id={props.id}>
            <div className='card-image'>
                <img src={props.image} style={styles.image} className='responsive-img' alt={props.name} onClick={() => props.handleClick(props.id)}></img>
            </div>
        </div>
    </div>
);



export default Cards;