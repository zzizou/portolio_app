import React from 'react'
import './contact.css'
const divmar = {
    paddingTop: '2%',
    paddingBottom: '2%',
}

class Contact extends React.Component{
    render(){
        return(
            
            <div className="mt-5 mb-5  c1 container"  style={divmar}>
        <h3 className="text-center " >CONTACT</h3> 
       
       <p className=" text-center lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
       <div className="row">
       <div className="offset-md-1 col-md-3 "> 
       <div  class="mycard">
                      <img width="50" height="50" className="card-img-top" src="/assets/gmail.svg" alt="Card image cap"/>
                      <div className="card-body">
                          <h6 className="card-text text-center">Email</h6>
                     </div>
                    </div>
            </div> 
            <div className="ml-5 col-md-3"> 
                Contact No
            </div> 
            <div className=" ml-5 col-md-3"> 
                Contact No
            </div>
             
       </div>
            
               
            </div>
        );
    }
}
export default Contact;