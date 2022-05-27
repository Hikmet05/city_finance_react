import React from 'react';
import './banner.css';
import frame26 from '../../image/Frame26.png';
import frame27 from '../../image/Frame27.png';
import frame28 from '../../image/Frame28.png';
import Card from '../Card/Card';
import Button from '../Button/Button';

function Banner() {

    const banner = [
        {
            id: 1,
            title: 'Missiyamız',
            image: frame28,
            text: 'Müştərilərə daha keyfiyyətli xidmət vermək, bizneslərə layihələrində dəyər qatmaq və ölkə iqtisadiyyatına dəstək olmaq.'
        },
        {
            id: 2,
            title: 'Məqsədimiz',
            image: frame27,
            text: 'Müştərilərə maksimal dərəcədə faydalı olmaq.'

        },
        {
            id: 3,
            title: 'Hədəfimiz',
            image: frame26,
            text: 'Qabaqcıl və daha güclü maliyyə qurumuna çevrilmək.'
        }
    ];

    return (
        <>
            <section className='banner_section'>
                <div className='banner'>
                    <div className='container'>
                        <div className='banner_text'>
                            <div className='banner_text_content'>
                                <h1>Sərfəli <span>Kredit</span></h1>
                                <p>
                                    “City Finance” uzun müddətli və aşağı faiz dərəcəli
                                    kredit təklifləri ilə bərabər rahat ödəmə üsulları da
                                    təklif edir.
                                </p>
                                <Button text='Ətraflı baxın' />
                            </div>
                        </div>
                        <div className='banner_poster'></div>
                    </div>
                </div>
            </section>

            <section className='banner_bottom_section'>
                <div className='container'>
                    {
                        banner.map((index, key) => (
                           <Card key={key} title={index.title} image={index.image} text={index.text} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Banner