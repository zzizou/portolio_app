import React from 'react'
import './intro.css'
const divmar = {
    paddingTop: '2%',
    paddingBottom: '2%',
}
function Intro(){
return(
    
    <div className=" container mt-5 mb-5  c1" >
     <div  style={divmar}>
         <div className="offset-md-5 offset-5 myimg">
         <img className="img-fluid imgcircle" src="/assets/zizou.png" />
        </div>
 <h1 className="text-center " id="title">JOHN DOE</h1> 
<p className=" text-center" id="subtitle">WEB DEVELOPER</p>
<p className=" text-center lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
     </div>
        {/* // <img class="card-img" width="60" src="/assets/zeeshan.jpg" alt="Zeeshan Zafar"/> */}
    </div>
    
);
}
export default Intro;