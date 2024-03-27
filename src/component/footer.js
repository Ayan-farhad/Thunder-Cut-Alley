import React from 'react'
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
    return (
        <footer className='footer'>

            <ul className='footer-icons'>
                <li><ImFacebook /></li>
                <li><FaInstagram /></li>
                <li><MdOutlineMailOutline /></li>
            </ul>
            <div className='ul-container'>
                <ul className='list'>
                    <li className='headings' style={{ fontFamily: 'Courier New', marginBottom: '15px' }}>Thunder Cut Alley</li>
                    <li>MENU</li>
                    <li>INSTAGRAM</li>
                    <li>FIND US</li>
                    <li>BOOK</li>
                </ul>
                <ul className='list'>
                    <li className='headings' style={{ fontFamily: 'Courier New', marginBottom: '15px' }}>LOCATION & CONTACT</li>
                    <li>SMITHFIELD,</li>
                    <li>SMITHFIELD SQUARE,</li>
                    <li>DUBLIN 7.</li>
                    <li>0316 2594406</li>
                    <li>khaanayan81@gmail.com</li>
                </ul>
                <ul className='list'>
                    <li className='headings' style={{ fontFamily: 'Courier New', marginBottom: '15px' }}>Opening Hours</li>
                    <li>Monday: Closed</li>
                    <li>Tuesday: Closed</li>
                    <li>Wednesday: from 5pm</li>
                    <li>Thursday: from 5pm</li>
                    <li>Friday: from 5pm</li>
                    <li>Saturday: from 11am</li>
                    <li>Sunday: from 11am</li>
                </ul>
            </div>

            <p className='footer-p'>© 2024 Thunder Cut Alley.
                <span style={{ color: '#ef227d' }}> Website by Ayan-Farhad</span>
            </p>
            <br />

        </footer>
    )
}

export default Footer;