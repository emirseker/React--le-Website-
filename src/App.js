import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './components/home';
import Services from './components/services';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FormPage from './components/formpage';
import About  from './components/about';
import Giris from './components/giris';


function App() {

  const params = {
    subject: "This Mail Sended with Express React App",
    text: "Çalışırsa manyak olur tşk"
    };
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( params )  
    };

  React.useEffect(() => {

        // fetch( '/ticket', options )
        // .then( response => response.json() )
        // .then( response => {
        //     // Do something with response.
        // } );

  }, []);


  return (
    <div>
      
      <Navbar/>
      
        {/* <Giris/>  */}
      <Routes>

        <Route path='/giris' element={<Giris/> } />
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/form/:type' element={<FormPage/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
