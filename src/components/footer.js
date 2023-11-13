import React from "react";
import '../styles/footer.scss'

import { LuInstagram, LuTwitter, LuFacebook } from 'react-icons/lu'

const Footer = () => {


    return (
        <div className="footer-wrapper">
            <div className="footer">
            <div className="info-section">
                <div className="name">Batuhan Şeker</div>
                <div className="phone">+90 539 967 60 70</div>
                <div className="name">Ahmet Şeker</div>
                <div className="phone">+90 542 243 91 97</div>
                <div className="adress">Yenidoğan Mahallesi, Bayraktar Sokak, No:1/A, Bayrampaşa/İstanbul</div>
                <div className="icon-wrapper">
                    <div> <a href="https://www.instagram.com/endustriyelelektrikbayrampasa/?igshid=MzRlODBiNWFlZA%3D%3D"><LuInstagram/></a> </div>
                    <div> <LuTwitter/> </div>
                    <div> <a href="https://www.facebook.com/profile.php?id=100068025473824"><LuFacebook/></a> </div>
                </div>
            </div>

            <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12037.969316718281!2d28.9142349!3d41.0363615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba6447c11c37%3A0xbce7b8930082d6b!2sEnd%C3%BCstriyel%20Elektrik!5e0!3m2!1sen!2str!4v1691271218637!5m2!1sen!2str" width="300" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
            <div className="legal-text">Tüm Hakları Saklıdır &copy;</div>
        </div>
        
      );
}


export default Footer;