import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




const fakeAxios ={
  get(){
    return new Promise((resolve,reject)=>{
setTimeout(() => {resolve({ data:7 })
}, 2000);
// setTimeout(()=>reject(new Error ('my error message')),1000);
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
  // componentDidMount(){
  //   fakeAxios.get('/abc/def').then(response =>{
  //     this.setState({data:response.data})
  //   }).catch(error =>{
  //     console.log("error happend", error);
  //   })
//
    async componentDidMount() {
      const coordsPromise = fakeAxios.get(`getcoords.com/api`)
      const statePromise = fakeAxios.get(`getstate.com/api`, 5000)
      const [coords, state] = await Promise.all([coordsPromise, statePromise])
      const { data: zipCode } = await fakeAxios.get(`getZipcode.com/${coords}/${state}`)
      const { data: weatherData } = await fakeAxios.get(`getWeather.com/${zipCode}`)
      this.setState({ data: weatherData })
    }
  


// *****************async await *************************
    // async componentDidMount{
  //   const { data: coords } = await fakeAxios.get(`getcoords.com/api`)
  //   console.log('hello')
  //   const { dataweatherData } = await fakeAxios.get(`getWeather.com/${zipCode}`)
  //   this.setState({ data: weatherData }): zipCode } = await fakeAxios.get(`getZipcode.com/${coords}`)
   
  // }
    // fakeAxios.get(`getcoords.com/api`).then(response => {
    //   const coords = response.data.coords
    //   fakeAxios.get(`zipcode.com/api/${coords}`).then(response => {
    //     const zipCode = response.data.zipCode
    //     fakeAxios.get(`getweather.com/api/${zipCode}`).then(response => {
    //       this.setState({ data: response.data })
    //     })
    //   })
    // })

    //*********************** Way to write nested axios***************** */
  //   const promise1 = fakeAxios.get(`getcoords.com/api`)
  //   const promise2 = promise1.then(response => {
  //     const coords = response.data.coords
  //     return fakeAxios.get(`zipcode.com/api/${coords}`)
  //   })
  //   const promise3 = promise2.then(response => {
  //     const zipCode = response.data.zipCode
  //     return fakeAxios.get(`getweather.com/api/${zipCode}`)
  //   })
  //   const promise4 = promise3.then(response => {
  //     this.setState({ data: response.data })
  //   })
  // }
  
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
