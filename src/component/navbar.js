import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import NavLogo from '../assest/tca_logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav-main-container'>
            <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>

                    <li className='navLi'>
                        <a href='#menu' className='nav-a'>MENU</a>
                    </li>

                    <li className='navLi'>
                        <a href='#Instagram' className='nav-a'>Instagaram</a>
                    </li>

                    <li className='navLi'>
                        {isOpen ? null : (
                            <a href='#Logo' className='nav-a'>
                                <img className='navLogo' src={NavLogo} alt="Logo" />
                            </a>
                        )}
                    </li>

                    <li className='navLi'>
                        <a href='#findus' className='nav-a'>FIND US</a>
                    </li>

                    <li className='navLi'>
                        <a href='#book' className='nav-a'>BOOK</a>
                    </li>
                </ul>

                <GiHamburgerMenu className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar} />
            </nav>
        </div>
    );
}

export default Navbar;
