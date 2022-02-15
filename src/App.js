import Api from './api/api';
import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/index';
import Main from './Components/main/main';

class App extends Component {



  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
