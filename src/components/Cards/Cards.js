import React from 'react';
import Col from '../Col';

const styles = {
    card: {
        height: '200px',
        width: '200px'
    }
}

const Cards = props => (
    <Col size='s3 l3'>
        <div className='card' style={styles.card} id={props.id}>
            <div className='card-image'>
                <img src={props.image} style={styles.card} className='responsive-img' alt={props.name} onClick={() => props.handleClick(props.id)}></img>
            </div>
        </div>
    </Col>
);

export default Cards;