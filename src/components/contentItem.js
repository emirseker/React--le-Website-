import React from "react";
import '../styles/content-item.scss'
import { LuInspect } from 'react-icons/lu'
import Modal from 'react-modal';
import ContentInspect from "./contentInspect";

const ContentItem = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
        },
      };

    return (
        <div>
             <div className="content-item" style={{backgroundImage: "url(" + props.contentImg + ")"}}>
            <div className="button-wrapper">
                <div className="inspect-button" onClick={openModal}> <div className="inspect-text">İncele</div>  <LuInspect className="icon" /> </div>
            </div>
            <div className="title-text">{props.contentTitle}</div>
        </div>
        
            <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel={props.contentTitle}
            ariaHideApp={false}
            >
                <ContentInspect passedFunction={closeModal} title={props.contentTitle} img={props.contentImg} content={props.contentData} />
            </Modal>
        </div>
       

        
      );
}


export default ContentItem;