import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import { render } from '@testing-library/react';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import StyleSheet from './Components/StyleSheet';
import Form from './Components/Form';

class App extends Component 
{
  
  render() 
  {
    return(
    <div className="App">
      {/*<Greet name="Firoz" occu="Captain America" >
        <p> This is a trial </p>
      </Greet>
      <Greet name="Firoz Jr." occu="Iron Man" />
      <button>Action</button>
    <Welcome name="Wayne Manor"></Welcome> */}
      <Form />

    </div>
  );
  }
}

export default App;
