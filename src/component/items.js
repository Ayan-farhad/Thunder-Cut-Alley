import React from 'react'
import cocktail from '../assest/cocktail.png'
import tacos from '../assest/taco.png'
import woodfired from '../assest/woodfired.png'

function Items() {
    return (
        <div>
            <div className='items-bar'>
                <div>
                    <img src={cocktail} />
                    <h2 className='about-h2'>CRAFT<br />
                        <span style={{ color: '#ef227d' }}>COCKTAIL MENU</span>
                    </h2>
                </div>

                <div>
                    <img src={tacos} />
                    <h2 className='about-h2'>TASTY<br />
                        <span style={{ color: '#ef227d' }}>TACOS</span>
                    </h2>
                </div>

                <div>
                    <img src={woodfired} />
                    <h2 className='about-h2'>WOODFIRED<br />
                        <span style={{ color: '#ef227d' }}>STONEBREADS</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Items;