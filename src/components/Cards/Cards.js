import React from 'react';
import Col from '../Col';

const Cards = props => (
    <Col size='s3 l3'>
        <div className='card' id={props.id}>
            <div className='card-image'>
                <img src={props.image} className='responsive-img' alt={props.name} onClick={() => props.handleClick(props.id)}></img>
            </div>
        </div>
    </Col>
);

export default Cards;