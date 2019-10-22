import React from 'react';
import './MyParticle/MyParticle';
import './MyParticle/Intro.js';
import MyParticle from './MyParticle/MyParticle'
import Navbar from './Navbar/Navbar';
import Intro from './MyParticle/Intro.js'
class Main extends React.Component{
    render(){
        return(
            <div>
            <MyParticle/>
          <Navbar/>
          <Intro/>
            </div>
        );
    }
}
export default Main;