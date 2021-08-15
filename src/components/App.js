import React, { Component } from 'react';
import GetLocation from './GetLocation';
import Searchbox from './Searchbox';
import Map from './Map';
import Tables from './Tables';
import 'antd/dist/antd.css'

export class App extends Component {
  state={lat:null,lng:null,name:null,results:[]};
  getlocation=()=>{
    window.navigator.geolocation.getCurrentPosition(position=>{
      this.setState({lat:position.coords.latitude,lng:position.coords.longitude});
    },
    err=>{
      this.setState({errorMessage:err.message})
    });
  }

  search=(name)=>{
    this.setState({name:name});
  }

  updateresults=(results)=>{
    this.setState({results:results});
  }

  delete=()=>{
    console.log("delete");
  }

  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(([key, val]) =>
      prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    );
    if (this.state) {
      Object.entries(this.state).forEach(([key, val]) =>
        prevState[key] !== val && console.log(`State '${key}' changed`)
      );
    }
  }

  render() {
    return (
      <div>
      <GetLocation onClick={this.getlocation}/>
      <Searchbox search={this.search} />
      <Map lat={this.state.lat} lng={this.state.lng} error={this.state.errorMessage} name={this.state.name} updateresults={this.updateresults}/>
      <Tables results={this.state.results} delete={this.delete} />
      </div>
    );
  }
}

export default App;
