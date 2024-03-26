import React from 'react';
import NavLogo from '../assest/tca_logo.png';

function Navbar() {
    return (
        <div className='nav-main-container'>
            <nav className='main-nav'>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className='navLi'><a href='#menu' className='nav-a'>MENU</a></li>
                    <li className='navLi'><a href='#Instagram' className='nav-a'>Instagaram</a></li>
                    <li className='navLi'><a href='#Logo' className='nav-a'>
                        <img className='navLogo' src={NavLogo} /></a>
                    </li>
                    <li className='navLi'><a href='#findus' className='nav-a'>FIND US</a></li>
                    <li className='navLi'><a href='#book' className='nav-a'>BOOK</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
