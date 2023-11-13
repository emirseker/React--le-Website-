import React from "react";
import ContentItem from "./contentItem";

import '../styles/services.scss'
import 'swiper/css';
import { Data } from "../helper/Data";

const Services = () => {

    return (
        <div className="services">
            {
                Data.map((item, index) => {
                    return <ContentItem key={index} className="service-card" contentImg={item.image} contentTitle={item.name} contentData={item.content} />
                    })
                }  
        </div>
      );
}


export default Services;