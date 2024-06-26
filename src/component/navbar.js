import React from 'react';
import NavLogo from '../assest/tca_logo.png';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';

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
                        <Link to="Menu" smooth={true} duration={700}>
                            <a href='#menu' className='nav-a'>MENU</a>
                        </Link>
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
        </div >
    );
}

export default Navbar;
