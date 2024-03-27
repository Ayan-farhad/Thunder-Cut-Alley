// import { useState } from 'react';
// import 'animate.css';
// import brunch from '../assest/brunch.jpg';
// import night from '../assest/night.jpg';
// import drinks from '../assest/drinks.jpg';

// function NavTabs() {
//     const [activeTab, setActiveTab] = useState('brunch');

//     const showImage = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className='main-navTabs'>
//             <div className='tabs-ul'>
//                 <ul>
//                     <li className={activeTab === 'brunch' ? 'active' : ''}>
//                         <a href='#brunch' onClick={() => showImage('brunch')}>
//                             <span>Brunch</span>
//                         </a>
//                     </li>
//                     <li className={activeTab === 'night' ? 'active' : ''}>
//                         <a href='#night' onClick={() => showImage('night')}>
//                             <span>Night</span>
//                         </a>
//                     </li>
//                     <li className={activeTab === 'drinks' ? 'active' : ''}>
//                         <a href='#drinks' onClick={() => showImage('drinks')}>
//                             <span>Drinks</span>
//                         </a>
//                     </li>
//                 </ul>
//             </div>
            
//             <div className='tabs-img' style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
//                 <img src={brunch} alt='brunch'  className="tabs-image animate__animated.animate__bounce" style={{ display: activeTab === 'brunch' ? 'block' : 'none' }} />
//                 <img src={night} alt='night' className="tabs-image animate__animated.animate__bounce"  style={{ display: activeTab === 'night' ? 'block' : 'none' }} />
//                 <img src={drinks} alt='drinks'  className="tabs-image animate__animated.animate__bounce" style={{ display: activeTab === 'drinks' ? 'block' : 'none' }} />
//             </div>
//         </div>
//     );
// }

// export default NavTabs;


import { useState } from 'react';
import 'animate.css'; // Ensure animate.css is imported properly
import brunch from '../assest/brunch.jpg';
import night from '../assest/night.jpg';
import drinks from '../assest/drinks.jpg';

function NavTabs() {
    const [activeTab, setActiveTab] = useState('brunch');

    const showImage = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='main-navTabs'>
            <div className='tabs-ul'>
                <ul>
                    <li className={activeTab === 'brunch' ? 'active' : ''}>
                        <a href='#brunch' onClick={() => showImage('brunch')}>
                            <span>Brunch</span>
                        </a>
                    </li>
                    <li className={activeTab === 'night' ? 'active' : ''}>
                        <a href='#night' onClick={() => showImage('night')}>
                            <span>Night</span>
                        </a>
                    </li>
                    <li className={activeTab === 'drinks' ? 'active' : ''}>
                        <a href='#drinks' onClick={() => showImage('drinks')}>
                            <span>Drinks</span>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className='tabs-img' style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                <img src={brunch} alt='brunch' className={`tabs-image ${activeTab === 'brunch' ? 'animate__animated animate__pulse' : ''}`} style={{ display: activeTab === 'brunch' ? 'block' : 'none' }} />
                <img src={night} alt='night' className={`tabs-image ${activeTab === 'night' ? 'animate__animated animate__pulse' : ''}`} style={{ display: activeTab === 'night' ? 'block' : 'none' }} />
                <img src={drinks} alt='drinks' className={`tabs-image ${activeTab === 'drinks' ? 'animate__animated animate__pulse' : ''}`} style={{ display: activeTab === 'drinks' ? 'block' : 'none' }} />
            </div>
        </div>
    );
}

export default NavTabs;
