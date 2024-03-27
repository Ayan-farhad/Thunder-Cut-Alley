import React from 'react'
import 'animate.css'
function Dishes() {

    // fetch('https://www.themealdb.com/images/ingredients')
    // .then(res => res.json())
    // .then(res => console.log(res))

    return (
        <div>
            Api fetch pending
            <div className='top-border animate__animated animate__backInLeft' style={border}></div>
        </div>
    )
}

export default Dishes;
const border = {
    marginTop: '3rem',
    width: '100%',
    height: '5px',
    borderTop: '4px solid #ef227d',
    borderBottom: '4px solid #ef227d',
}