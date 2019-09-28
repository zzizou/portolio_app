import React from 'react';
import './App.css';
import { directive } from '@babel/types';
import { builtinModules } from 'module';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
class App extends React.Component {
    state = {
        persons : [
            {name: 'Zeeshan', age: '23' , title:"Front End Developer" , email: "zeeshan2636@gmail.com" , phoneNumber: "03365192096" , linkedinProfile: ""},
        ]
    }

    btnEventHandler = () => {
        alert("You just clicke a button")
    }

    render() {
        return (
            <div>
            <Navbar/>
        
            <Content name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <div className="alert alert-primary" role="alert">
                This is a primary alert—check it out!
            </div>
            <button onClick={this.btnEventHandler}>
                Click me!
            </button>
            </div>
            
        );
    }
}
export default App;