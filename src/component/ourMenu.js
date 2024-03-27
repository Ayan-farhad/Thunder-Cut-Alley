import React from 'react'
import NavTabs from './navTabs';
import 'animate.css';

function OurMenu() {
  return (
    <div id='Menu' className='main-ourMenu'>
      <h1 style={{ color: '#ef227d' }}>OUR MENU</h1>
      <NavTabs />
      <div className='top-border animate__animated animate__backInLeft' style={border}></div>
    </div>
  )
}

export default OurMenu;
const border = {
  marginTop: '3rem',
  width: '100%',
  height: '5px',
  borderTop: '4px solid #ef227d',
  borderBottom: '4px solid #ef227d',
}