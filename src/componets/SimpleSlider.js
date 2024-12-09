import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css"
import {Container} from "react-bootstrap";


export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    };
    return (
        <Container id={"home"}>
            <Slider {...settings}>
                <div className={'col-12'}>
                    <img className={'w-100'} src={'img1.jpg'} alt={'img1'}/>
                </div>
                <div className={'col-12'}>
                    <img className={'w-100'} src={'img2.jpg'} alt={'img2'}/>
                </div>
                <div className={'col-12'}>
                    <img className={'w-100'} src={'img3.jpg'} alt={'img3'}/>
                </div>


            </Slider>
        </Container>
    );
}