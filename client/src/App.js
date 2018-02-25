import React, { Component } from "react";

import { getWeather } from "./services/weather";
import { addressLookup } from './services/addressLookup';
import { isEmptyObject } from "./utils";
import HourlyWeather from "./HourlyWeather";
import FormHandler from './FormHandler';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      hourlyWeather: [],
      error: null,
      city: '',
      state: '',
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleLatLonSubmit = this.handleLatLonSubmit.bind(this);
    this.geolocation = this.geolocation.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }
  handleLatChange(e) {
    this.setState({
      lat: +e.target.value
    });
  }
  handleLonChange(e) {
    this.setState({
      lon: +e.target.value
    });
  }
  handleLatLonSubmit(e) {
    e.preventDefault();
    this.runGetWeather();
  }
  handleStreetAddressChange(e) {
    this.setState({
      streetAddress: e.target.value
    });
  }
  handleCityChange (e) {
    this.setState({
      city: e.target.value
    });
  }
  handleStateChange(e){ 
    this.setState({
      state: e.target.value
    });
  }
  handleAddressSubmit(e){
    e.preventDefault();
    addressLookup(this.state.city, this.state.state)
      .then(response => {
        const latitude = response.data.results[0].geometry.location.lat.toFixed(4);
        const longitude = response.data.results[0].geometry.location.lng.toFixed(4);
        this.setState({
          lat: latitude,
          lon: longitude,
        }, this.runGetWeather())
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: 'addressLookup failed'
        });
      });
  }
  runGetWeather(){
    getWeather(this.state.lat, this.state.lon)
    .then(response => {
      const hourlyWeather = response.data.hourly.data;
      this.setState({
        hourlyWeather: hourlyWeather
      });
    })
    .catch(error => {
      console.log(error);
      this.setState({
        error: "getWeather failed"
      });
    });
  }
  geolocation(){
    navigator.geolocation.getCurrentPosition((position)=> {
      const latitude = position.coords.latitude.toFixed(4);
      const longitude = position.coords.longitude.toFixed(4);
      this.setState({
        lat: latitude,
        lon: longitude
      }, this.runGetWeather())
    });
  }
  
  render() {
    const hourlyWeather = this.state.hourlyWeather;
    const HourlyGrid = hourlyWeather.map((hourlyWeather, index) => <HourlyWeather key={index}
                                                                                summary={hourlyWeather.summary}
                                                                                icon={hourlyWeather.icon}
                                                                                time={hourlyWeather.time}
                                                                                temperature={hourlyWeather.temperature} />
                                                                              )
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={e => this.handleLatLonSubmit(e)}>
          <label>Latitude:</label>
          <input
            min="-90"
            max="90"
            onChange={e => this.handleLatChange(e)}
            value={this.state.lat}
            step=".0001"
            type="number"
          />
          <label>Longitude:</label>
          <input
            min="-180"
            max="180"
            onChange={e => this.handleLonChange(e)}
            value={this.state.lon}
            step=".0001"
            type="number"
          />
          <button type="submit">Get the Weather</button>
        </form>
        <h3>Or:</h3>
        <button onClick={this.geolocation}>Use Geolocation</button>
        <h3>Or Use Address:</h3>
        <form onSubmit={e => this.handleAddressSubmit(e)}>
          <label>City</label>
          <input 
            type="text" 
            value={this.state.city}
            onChange = { e => this.handleCityChange(e)} />
          <label>State</label>
          <input 
            type="text"
            value={this.state.state}
            onChange = { e => this.handleStateChange(e)} />
          <button type='submit'>Get Weather</button>
        </form>
        <FormHandler 
          handleLatLonSubmit={this.handleLatLonSubmit}
          handleLatChange = {this.handleLatChange}
          handleLonChange = {this.handleLonChange}
          lat = {this.state.lat}
          lon = {this.state.lon}
        />
        {this.state.error ? <h1>{this.state.error}</h1> : ""}
        {isEmptyObject(this.state.hourlyWeather) ? (
          ""
        ) : ( 
          HourlyGrid
        )}
      </div>
    );
  }
}

export default App;
