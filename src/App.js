import React from 'react';
import './App.css';
import { directive } from '@babel/types';
import { builtinModules } from 'module';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import zizou from './zizou.png';
class App extends React.Component {
    state = {
        persons : [
            {name: 'Zeeshan', age: '23' , title:"Front End Developer" , email: "zeeshan2636@gmail.com" , phoneNumber: "03365192096" , linkedinProfile: "https://www.linkedin.com/in/muhammad-zeeshan-zafar-8a059510a/"},
        ]
    }

    btnEventHandler = () => {
        alert("You just clicke a button")
    }

    render() {
        return (
            <div>
            <Navbar/>
            <br />
            <br/>
            <br/>
            <Content name={this.state.persons[0].name} age={this.state.persons[0].age} email={this.state.persons[0].email}/>
            <div className="alert alert-primary" role="alert">
                This is a primary alert—check it out!
            </div>
            <button onClick={this.btnEventHandler}>
                Click me!
            </button>
            <img src={zizou} alt="asdasd" />
            </div>
            
        );
    }
}
export default App;