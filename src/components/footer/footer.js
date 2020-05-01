import React from 'react';
import '../../../src/assets/styles/styles.scss';
import LogoFooter from '../../assets/images/logoFooter.png'


export default() => {
    return(
        <>
         <div className="footerBox">
             <div className="left">
                 <div className="logoFooter"></div>
             </div>
             <div className="center">
                 <h2>Academics</h2>
                 <ul>
                    <li>Afiniti is the world’s</li>
                    <li>Afiniti is the world’s</li>
                    <li>Afiniti is the world’s</li>
                    <li>Afiniti is the world’s</li>
                 </ul>
             </div>
             <div className="right">
             <h2>Certifications</h2>
             <ul>
                    <li>Afiniti is the world’s</li>
                    <li>Afiniti is the world’s</li>
                    <li>Afiniti is the world’s</li>
                    <li>Afiniti is the world’s</li>
                 </ul>
             </div>
         </div>
        </>
    );
}