import SliderCard from "../SliderCard/SliderCard";
import './slide.css';
import slide1 from '../../image/slide1.png';
import slide2 from '../../image/slide2.png';
import slide3 from '../../image/slide3.png';
import slide4 from '../../image/slide4.png';

//slick_slider
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function Slide() {

    const slide = [
        {
            id: 1,
            title: 'Avtokredit',
            image: slide1
        },
        {
            id: 2,
            title: 'Mikrokredit',
            image: slide2
        },
        {
            id: 3,
            title: 'İstehlak krediti',
            image: slide3
        },
        {
            id: 4,
            title: 'Lombard krediti',
            image: slide4
        }
    ];

    const settings = {
        autoplay: true,
        speed:3000,
        loop: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <section className='slider_section'>
                <div className='container'>
                    <h2>Xidmətlərimiz</h2>
                    <Slider {...settings}>
                        {
                            slide.map((card, i) => (
                                <SliderCard key={i} title={card.title} image={card.image} />
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Slide;