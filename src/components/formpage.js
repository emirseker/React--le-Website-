import React, { useEffect, useState } from "react";
import '../styles/form-page.scss'
import { useParams } from 'react-router';
import formImage from '../assets/content-img/desktop-wallpaper-of-electronics-teahub-io.jpg'


const FormPage = (props) => {
    const params= useParams();

    const headerText = params.type == "request" ? "Arıza Talebi" : "Teklif Al"
    
    const [formText, setFormText] = useState("")

    useEffect(() => {
        if(params.type === "register"){
            setFormText("Arıza Talebi");
        }
        else{
            setFormText("İş");
        }
    })
    
    

    const formAction = (e) => {
        e.preventDefault();
        const target = e.target       

        const params = {
            subject: headerText + " / " + target[3].value + " / " + target[0].value,
            detail: target[5].value,
            name: target[0].value,
            phone: target[2].value,
            email:  target[1].value,
            select:  target[3].value,
            };
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify( params )  
            };

        fetch( '/ticket', options )
        .then( response => response.json() )
        .then( response => {
            // Do something with response.
        } );
    }

    const dataType = {
        register: ["Elektrik Kesintisi", "Aydınlatma Sorunu", "Priz Problemi", "TV Arızaları", "Diğer"],
        price: ["Elektrik Tesisatı", "Onarım ve Arıza Bakım", "Yangın Alarm Sistemleri", "Pano", "Aydınlatma", "Kamera Sistemleri", "UPS Sistemleri", "Kompanzasyon Sistemleri", "Otomatik Kumanda Panoları", "Kabinet Sistemleri"]
    }

    return (
        <div className="form-page-wrapper">
            <div className="img-container"> <div className="img-wrapper"> <img src={formImage}></img> </div> </div>
            <div className="form-wrapper" key={headerText}>
                        <form onSubmit={(event) => formAction(event)} className="form">
                            <div className="left">
                                <div className="input-field-wrapper">
                                    <label>Ad Soyad</label>
                                    <input type="text" name="name" required></input>
                                </div>
                                

                                <div className="input-field-wrapper">
                                    <label>E-posta Adresi</label>
                                    <input type="email" required></input>
                                </div>

                                <div className="input-field-wrapper">
                                    <label>Telefon Numarası</label>
                                    <input type="phone" required></input>
                                </div>
                            </div>
                            <div className="right">
                                <div className="input-field-wrapper">
                                        <label>{formText} Türü</label>
                                        <select>
                                            {
                                                dataType[params.type].map((element, index) => {
                                                    return <option key={index} value={element}>{element}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="input-field-wrapper">
                                        <label>{formText} Alanı Fotoğrafı (Opsiyonel)</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="input-field-wrapper">
                                        <label>{formText} Detayı</label>
                                        <textarea></textarea>
                                    </div>
                                    <div className="button-wrapper"> <input type="submit" value="Gönder"></input> </div>
                            </div>
                            
                            
                        </form>
            </div>
        </div>
        
      );
}


export default FormPage;