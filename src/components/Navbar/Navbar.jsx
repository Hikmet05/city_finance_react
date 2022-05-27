import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';
import Button from '../Button/Button';
import './navbar.css';

function Navbar() {
    return (
        <>
            <section className='header_section'>
                <div className='container'>
                    <div className='navbar'>
                        <div className='nav_logo'>
                            <a href='#'><img src={logo} alt="logo" /></a>
                        </div>
                        <div className='navigation'>
                            <ul>
                                <li><a href="#">Haqqımızda</a></li>
                                <li><a href="#">Xidmətlər</a></li>
                                <li><a href="#">Kampaniyalar</a></li>
                                <li><a href="#">Partnyorlarımız</a></li>
                            </ul>
                        </div>

                        <div className='icon_btn_box'>
                            <i className="fal fa-magnifying-glass search"></i>
                            <Button text='Kredit sifarişi' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar