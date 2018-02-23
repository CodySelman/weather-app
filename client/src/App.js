import React, { Component } from 'react';

import {getWeather} from './services/weather';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lat: 0,
      lon: 0,
      hourlyWeather: {}
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLatChange(e){
    this.setState({
      lat: +e.target.value
    });
  }
  handleLonChange(e){
    this.setState({
      lon: +e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    getWeather(this.state.lat, this.state.lon)
      .then(response => {
        const hourlyWeather = response.data.hourly;
        this.setState({
          hourlyWeather: hourlyWeather
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Latitude:</label>
          <input onChange={(e)=>this.handleLatChange(e)} value={this.state.lat} step='.0001' type="number"/>
          <label>Longitude:</label>
          <input onChange={(e)=>this.handleLonChange(e)} value={this.state.lon} step='.0001' type="number"/>
          <button type='submit'>Get the Weather</button>
        </form>
        {JSON.stringify(this.state.hourlyWeather, null, 4)}
      </div>
    );
  }
}

export default App;
