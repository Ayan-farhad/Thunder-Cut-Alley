import React from 'react'
import Tca from '../assest/tca.png'


function Home() {
    return (
        <div className='main-Home'>
            <img className='homeLogo' src={Tca} />
            <h2 id='home-address' className='home-address'>SMITHFIELD MARKET SQ, DUBLIN 7,  D07H977</h2>
            <h2 className='home-table'>BOOK A TABLE</h2>
        </div>
    )
}

export default Home;