import React from 'react'
import Items from './items';
import Menuintro from './menuIntro';
import 'animate.css';

function Aboutthunder() {
    return (
        <div className='about-container'>
            <div className='top-border animate__animated animate__backInLeft' style={border}></div>
            <Items />
            <div className='top-border animate__animated animate__backInLeft' style={border}></div>
            <Menuintro />
            <div className='top-border animate__animated animate__backInLeft' style={borderBottom}></div>
        </div>
    )
}

export default Aboutthunder;
const border = {
    marginTop: '3rem',
    width: '100%',
    height: '5px',
    borderTop: '4px solid #ef227d',
    borderBottom: '4px solid #ef227d',
}
const borderBottom = {
    marginTop: '10px',
    width: '100%',
    height: '5px',
    borderTop: '4px solid #ef227d',
    borderBottom: '4px solid #ef227d',
}