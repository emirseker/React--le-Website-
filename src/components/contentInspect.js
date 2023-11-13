import React from "react";
import '../styles/contentInspect.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const ContentInspect = (props) => {


    return (
        <div className="content-inspect-wrapper">
            <div className="close-button" onClick={props.passedFunction}> <AiOutlineCloseCircle/> </div>
            <div className="title">{props.title}</div>
            <div className="img-wrapper"> <img src={props.img}></img> </div>
            <div className="content">{props.content}</div>
            
        </div>        
      );
}


export default ContentInspect;