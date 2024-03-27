import React from 'react'
import Tca from '../assest/tca.png'
import 'animate.css';

function Home() {
    return (
        <div className='main-Home'>
            <img className='homeLogo animate__animated animate__backInLeft' src={Tca} />
            <h2 id='home-address' className='home-address animate__animated animate__backInLeft'>
                SMITHFIELD MARKET SQ, DUBLIN 7,  D07H977
            </h2>
            <h2 className='home-table animate__animated animate__backInLeft'>BOOK A TABLE</h2>
        </div>
    )
}

export default Home;