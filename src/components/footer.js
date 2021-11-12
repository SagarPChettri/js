import React from 'react'
import {Button} from './Button';
import './footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
            <p className='footer-subscriptiion-heading'>
                Thank You!!! If you liked it then Contact me.</p> 
            <Button buttonStyle='btn--outline'>Sign Up</Button>
            </section>
        </div>
    )
}

export default Footer;
