import React from 'react';
import './MyParticle/MyParticle';
import './MyParticle/Intro.js';
import MyParticle from './MyParticle/MyParticle'
import Navbar from './Navbar/Navbar';
import Intro from './MyParticle/Intro.js'
import './Footer/Footer'
import Footer from './Footer/Footer';
import './Footer/Contact'
import Contact from './Footer/Contact';
import './Portfolio/Portfolio'
import Portfolio from './Portfolio/Portfolio';
import Education from './CV/Educations';

class Main extends React.Component{
    render(){
        return(
            <div>
            <MyParticle/>
          <Navbar/>
          <Intro/>
          <Contact/>
          <Portfolio/>
          <Education/>
          <Footer/>
          
            </div>
        );
    }
}
export default Main;