import React from 'react'

import Particles from 'react-particles-js';
function MyParticle(){
    return (
         
        <div className="particles">                   
        <Particles 
       params={{
        "particles": {
            "number": {
              "value": 90,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 12
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 61.099796334012225,
                "size_min": 29.327902240325866,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 257.3836947429381,
              "color": "#ffffff",
              "opacity": 0.739978122385947,
              "width": 0.4825944276430089
            },
            "move": {
              "enable": true,
              "speed": 3.5,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 146.63951120162932,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 65.17311608961303,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            },
           
          },
          "retina_detect": false
       
    }} 
  
       /></div>
    );
}
export default MyParticle;