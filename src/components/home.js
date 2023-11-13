import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ContentItem from "./contentItem";
import { MdOutlineSwipeDown }from 'react-icons/md';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/home.scss'
import Giris from '../components/giris';
import Cards from '../components/cards'

import { Data } from "../helper/Data";

export default function Home  ()  {

     const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const scroolToFooter = () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    };
   
    return (

        
        <div>
            <Giris/> 
            <Cards/>
            <div className="home-wrapper">
                <div className="section-header"></div>
                <div className="slider-wrapper">
                    <p className="kesfet1"> Daha Fazlasını Keşfet!</p>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    breakpoints={{
                        720: {
                            slidesPerView: 2
                        },
                        1400: {
                            slidesPerView: 3
                        }
                    }
                        
                    }
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            Data.map((item, index) => {
                                return <SwiperSlide key={index}> <ContentItem contentData={item.content} contentImg={item.image} contentTitle={item.name}/> </SwiperSlide>
                            })
                        }  
                        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>              
                    </Swiper>
                </div>

                <div className="scroll-wrapper" onClick={scroolToFooter}>
                    <div className="scroll-text">Bize Ulaşın</div>
                    <div className="scroll-icon"><MdOutlineSwipeDown/></div>
                </div>
                
            </div>
           
        </div>
      );
}


