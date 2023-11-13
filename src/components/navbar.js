import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { BsFillTriangleFill } from 'react-icons/bs';
import '../styles/navbar.scss';
import fis from '../assets/visual-content/giphy.gif'
import fis2 from '../assets/visual-content/200w.gif'

const Navbar = () => {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        setIsCollapseOpen(!isCollapseOpen);
    }

    return (

        
        <div className="navbar">
               
                <img src={fis} className="fis" alt=""/>
               
            <div className="logo-section">
                <div className="logo-wrapper"><img alt="logo" src={logo}></img></div>
                <div className="brand-name">Endüstriyel Elektrik</div>
            </div>

            <div className="nav-section">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/services">Hizmetlerimiz</Link>
                <Link to="/about">Hakkımızda</Link>
                <div className={`nav-button collapse ${isCollapseOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                    İş Talebi Oluştur <BsFillTriangleFill className={`icon ${isCollapseOpen ? 'open' : ''}`} />
                    <div className={`collapsable-box ${isCollapseOpen ? 'open' : ''}`}>
                        <div className="link-wrapper">
                            <Link to="/form/price">Teklif Al</Link>
                            <Link to="/form/register">Arıza Talebi</Link>
                        </div>
                    </div>
                     
                </div>
                
            </div>
             <div className="priz">
                <img src={fis2} className="fis2" alt=""/>
                </div>
        </div>
       
    );
}

export default Navbar;
