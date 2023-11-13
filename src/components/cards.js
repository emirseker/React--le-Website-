import React from 'react'
import tvpng from '../assets/visual-content/ATV4_appstore.png'
// import videotv from '../assets/visual-content/Turksat Uydu Anten Kurulumu.mp4'
import '../styles/cards.css'
import mobileimg from '../assets/visual-content/mobileimg.png'
import stposter from '../assets/visual-content/_5e836c26-df90-449c-9023-4f852aee343e.jpg'
import downloadgif from '../assets/visual-content/image_processing20200113-21003-ewscdc.gif'
import devicespng from '../assets/visual-content/devices1.png'
import secur from '../assets/visual-content/comp3.jpg'
import kidspng from '../assets/visual-content/ampul-isik.gif'

function cards() {
  return (
    <>

   <div className='anten'>
    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column column-mini'>
            <div className='card-title'>Uydu ve Anten Çözümlerimizle İleri Teknolojiyi Evinize Getirin</div>
            <div className='card-text'>HD kalitesindeki yayınları ve son teknoloji anten sistemlerini evinize entegre ederek, izleme deneyiminizi zirveye taşıyoruz. Güçlü sinyal, kesintisiz bağlantı ve uzman elektrikçi ekibimizin sağladığı güvenilirlikle, teknolojiyle iç içe bir yaşamın tadını çıkarın.</div>
          </div>
          <div className='card-column'>
              { <img src={tvpng} className='tvapple'  alt="tv" /> }
              {/* <video className='video1' autoPlay loop muted playsInline>
               <source src={videotv} type='video/mp4'></source>
              </video> */}
          </div>
        </div>
        <div className='card-bar1'></div>
    </div>
   </div>
      
    
    
    <div className='audio'>
      <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column order2'>
              <img src={mobileimg} className='d-flex w-100 h-100 z-2' alt="mobile" />
              <div className='status-box'>
                <img className='poster' src={stposter} alt="strangerthings-download" />
                <div className='text-box'>
                  <div className='status-title'>Doğalgaz</div>
                  <div className='status-text'>Kapatılıyor...</div>
                </div>
                <img className='download-gif' src={downloadgif} alt="downloadgif" />
              </div>
          </div>
          <div className='card-column column-mini order1'>
            <div className='card-title'>Evini Akıllandır! Elektrikçi Hizmetleri ile Akıllı Ev Sistemleri</div>
            <div className='card-text'>Elektrikçi hizmetlerimizle akıllı ev sistemleri çözümlerimiz, enerji verimliliğinden güvenliğe kadar her ihtiyaca yönelik profesyonel çözümler sunuyor. </div>
          </div>
        </div>
        <div className='card-bar1'></div>
    </div>
    </div>

    <div className='securimg1'>
      <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column column-mini'>
            <div className='card-title'>İstediğiniz her yerde izleyin</div>
            <div className='card-text'>"Ev veya işyerinizde güvenliği bir üst seviyeye çıkarmak için elektriğin gücünü kullanın! Kaliteli kamera ve alarm sistemleri ile tanışın, uzman elektrikçi ekibimizle güvenliği bir adım öne taşıyın. </div>
          </div>
          <div className='card-column'>
              <img src={devicespng} className='d-flex w-100 h-100 z-2' alt="devices" />
              <div className='video-box'>
                
                <img src={secur} className='securimg' alt=''/>
                
              </div>
          </div>
        </div>
        <div className='card-bar1'></div>
    </div>
    </div>
    <div className='light1'>
<div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column order2'>
              <img src={kidspng} className='d-flex w-100 h-100 z-2' alt="kids" />
          </div>
          <div className='card-column column-mini order1'>
            <div className='card-title'>Ev Aydınlatmasında Profesyonel Çözümler</div>
            <div className='card-text'>Ev aydınlatmasında uzman dokunuşlar! Elektrikçi hizmetlerimiz, evinizi aydınlatmanın modern ve enerji tasarruflu yollarını sunuyor. Uyumlu aydınlatma seçenekleriyle evinizi aydınlatmak hiç bu kadar kolay olmamıştı</div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>
    </div>
    

    </>
    
    

    
  )
}

export default cards