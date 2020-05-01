import React from 'react';
import '../../../src/assets/styles/styles.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


import Carousel1 from '../../assets/images/carousel1.jpg'
import Carousel2 from '../../assets/images/carousel2.jpg'
import Carousel3 from '../../assets/images/carousel3.jpg'


export default () => {
    return (
        <> 
            {/* Navigation bar code */}
            <div className="navBar">
                <div className="logo"></div>
                <a href="#" className="navBarLink"> Home</a>
                <a href="#" className="navBarLink"> About</a>
                <a href="#" className="navBarLink"> Careers</a>
                <a href="#" className="navBarLink"> Gallery</a>
            </div>

            {/* carousel code start */}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={47}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}><img className="carouselImage" src={Carousel1}></img></Slide>
                    <Slide index={1}><img className="carouselImage" src={Carousel2}></img></Slide>
                    <Slide index={2}><img className="carouselImage" src={Carousel3}></img></Slide>
                </Slider>
            </CarouselProvider>
            {/* carousel code end */}

            {/* about section start */}

            <div className="homePageAboutHeading"><h1>About Us</h1></div>
            <div className="homePageAbout">
            <div className="Left"></div>
            <div className="Right">
                <p>
                   Afiniti is the world’s leading applied artificial intelligence and advanced analytics
                   provider. Afiniti Enterprise Behavioral Pairing™ uses artificial intelligence to
                   identify subtle and valuable patterns of human interaction in order to pair individuals 
                   on the basis of behavior
                </p>
            </div>
            </div>
            



        </>
    );
}