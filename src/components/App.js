import React, { Component } from 'react';
import GetLocation from './GetLocation';
import Searchbox from './Searchbox';
import Map from './Map';
import Tables from './Tables';
import 'antd/dist/antd.css'

export class App extends Component {
  state={lat:'',lng:''};
  getlocation=()=>{
    window.navigator.geolocation.getCurrentPosition(position=>{
      this.setState({lat:position.coords.latitude,lng:position.coords.longitude});
    },
    err=>{
      this.setState({errorMessage:err.message})
    });
  }

  delete=()=>{
    console.log("delete");
  }

  render() {
    return (
      <div>
      <GetLocation onClick={this.getlocation}/>
      <Searchbox />
      <Map lat={this.state.lat} lng={this.state.lng} />
      <Tables delete={this.delete} />
      </div>
    );
  }
}

export default App;
