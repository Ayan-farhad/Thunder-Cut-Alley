import React from 'react'
import Lady from '../assest/DRAG-Drinks.png'

function Menuintro() {
  return (
    <div className='main-menuIntro'>
      <img src={Lady} style={{ width: '100%', maxWidth: '680px', marginTop: 10 }} alt='Lady' />

      <div className='intro-p'>
        <h2 className='about-h2' style={{ color: '#ef227d' }}>THUNDER CUT ALLEY</h2>
        <p className='paragraph'>Thundercut Alley is a quirky hidden retro spot in Smitfield D7. Serving up some original craft cocktails and specialising in handmade Sourdough Flatbreads and tasty tacos prepared in our Wood Fired Oven, we also do pimped Fries, some unique Salads, and our infamous Tca Loaded Nachos.</p>
        <p className='paragraph'>We have two different bottomless options. Bottomless Mimosa 26,95 € per person and Bottomless Spirits 37,95 € per person. They are available every day. Bottomless Cocktails must be ordered with a main food dish. Bottomless Cocktails are available for 1h and 30 mins from the Start Time of your order.</p>
      </div>
    </div>
  )
}

export default Menuintro;