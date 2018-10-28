import React from 'react';
import Container from '../Container';

const Nav = props => (
    <nav>
        <div className="nav-wrapper">
            <Container fluid>
                <a href="#!" className="brand-logo center">Twin Peaks Memory</a>
                <ul>
                    <li>{props.currentScore}</li>
                    <li>{props.topScore}</li>
                </ul>
            </Container>
        </div>
    </nav>
);

export default Nav;