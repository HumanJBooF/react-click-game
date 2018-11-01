import React from 'react';
import styles from './styles';

const Footer = () => (
    <footer className="page-footer" style={styles.footer}>
        <div className='container'>
            <div className='row'>
                <div className="col l2 s6">
                    <a style={styles.color} href='https://github.com/HumanJBooF'>
                        <i class="fab fa-github fa-7x"></i>
                        <p style={styles.color}>@HumanJBooF</p>
                    </a>
                </div>

                <div className='col l2 offset-l3 s6'>
                    <a style={styles.color} href='https://www.linkedin.com/in/joshua-leboeuf-488550164/'>
                        <i class="fab fa-linkedin fa-7x"></i>
                        <p style={styles.color}>Joshua LeBoeuf</p>
                    </a>
                </div>
                <div className='col l2 offset-l3 s6'>
                    <a style={styles.color} href='https://reactjs.org/'>
                        <i class="fab fa-react fa-7x"></i>
                        <p style={styles.color}>Check out React!</p>
                    </a>
                </div>
            </div>
            <div className="footer-copyright center">
                <div className="container">
                    © 2018
                </div>
            </div>
        </div>
    </footer >

);

export default Footer;