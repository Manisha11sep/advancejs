import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




const fakeAxios ={
  get(){
    return new Promise((resolve,reject)=>{
// setTimeout(() => {resolve({ data:7 })
setTimeout(()=>reject(new Error ('my error message')),1000);

    })
  }
}
class App extends Component {
  constructor(){
    super()
      this.state={
        data:null
      
    }
  }
  componentDidMount(){
    fakeAxios.get('/abc/def').then(response =>{
      this.setState({data:response.data})
    }).catch(error =>{
      console.error("error happend", error);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <div>
         {JSON.stringify(this.state.data, null,2)}
         </div>

      </div>
    );
  }
}

export default App;
