import React from 'react';
import NavBar from '../../components/navBar/navBar' 
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import './style.scss';

export default() => {
    return(
        <>
        
         <NavBar/>
         <Card/>

         <Footer/>
         
        </>
    );
}