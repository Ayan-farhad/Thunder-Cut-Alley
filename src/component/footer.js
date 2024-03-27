import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className='ul-container'>
                <ul className='list'>
                    <li className='headings'>Thunder Cut Alley</li>
                    <li>MENU</li>
                    <li>INSTAGRAM</li>
                    <li>FIND US</li>
                    <li>BOOK</li>
                </ul>
                <ul className='list'>
                    <li className='headings'>LOCATION & CONTACT</li>
                    <li>SMITHFIELD,</li>
                    <li>SMITHFIELD SQUARE,</li>
                    <li>DUBLIN 7.</li>
                    <li>087 720 2012</li>
                    <li>thundercutalleyrestaurant@gmail.com</li>
                </ul>
                <ul className='list'>
                    <li className='headings'>Opening Hours</li>
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

        </footer>
    )
}

export default Footer;