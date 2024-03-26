import React from 'react'
import NavTabs from './navTabs';

function OurMenu() {
  return (
    <div className='main-ourMenu'>
        <h1 style={{color: '#ef227d'}}>OUR MENU</h1>
        <NavTabs/>
        <div className='top-border' style={border}></div>
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