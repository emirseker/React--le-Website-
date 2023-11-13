import React from 'react'
import '../styles/giris.css'
import  heroimage  from '../assets/visual-content/_7bc11db3-4d57-427b-819b-c467f02578f1.jpg'
import {AiOutlineArrowDown} from "react-icons/ai";
import {GiElectric} from "react-icons/gi";
import {GiClick} from 'react-icons/gi'

function giris() {
    const scroolToFooter = () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    };
  return (
    <div>
        
        
          
        <div className='position-relative hero'>
        <div className='hero-box'>
        
            <div className='hero-title'>Hayatınızı Aydınlatan Elektrikçi Hizmetimizle Tanışın!</div>
            <div className='hero-text' style={{marginTop:'1rem'}}>Güvenliğinizi Ön Planda Tutun: Profesyonel Elektrik Hizmetleriyle Tanışın</div>
            <h3 className='hero-text-title' >Hayatınızı aydınlatmak için bizimle iletişime geçin. Profesyonel, güvenilir ve estetik elektrik hizmetleri ile yaşam alanlarınızı daha aydınlık bir geleceğe taşıyalım! Bayrampaşa ve İstanbul için elektrikçi hizmetlerimiz sizi bekliyor.</h3>
            <div className='giris'>
            <div className='downbutton'>
            <div className="scroll-wrapper" onClick={scroolToFooter}>
                <GiElectric/>
                    <div className="scroll-icon"><AiOutlineArrowDown/></div>
                    
                </div>
                <p className='kesfet'>BİZİ YAKINDAN KEŞFEDİN</p>
                <div className="scroll-wrapper" onClick={scroolToFooter}>
                      <GiElectric/>
                    <div className="scroll-icon" ><AiOutlineArrowDown/></div>
                  
                </div>
                
            </div>
              
              
            </div>
            <div className='connectbut' onClick={scroolToFooter}> Hemen Bizimle İletişime Geçin<GiClick/></div>
        </div>
        
        <div className='image-container'>
            <img src={heroimage} alt="hero" className='image' />
            <div className='shadow'></div>
        </div>
    </div>
        <div className='arageçis'>
          
        
        </div>
        
    </div>
   
  )
}

export default giris