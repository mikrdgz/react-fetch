import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    isLoading: true,
    contacts: []
  };
}

componentDidMount(){
  this.fetchData();
}

fetchData = () => {
fetch('https://randomuser.me/api/?results=10')
.then( response => response.json())
.then(data => console.log(data))
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
  }
}

export default App;
