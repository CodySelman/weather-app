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
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
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
      const hourlyWeather = response.data.hourly.data.slice(0, 12);
      console.log(hourlyWeather);
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
  changeLocation(){
    this.setState({
      hourlyWeather: []
    })
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
        <h1 className='text-center'>City Name</h1>
        <h2 className='text-center'>Summary</h2>
        <h2 className='text-center'>Temperature</h2>
        
        
        {this.state.error ? <h1>{this.state.error}</h1> : ""}
        {isEmptyObject(this.state.hourlyWeather) ? (
          <FormHandler 
            handleLatLonSubmit={this.handleLatLonSubmit}
            handleLatChange = {this.handleLatChange}
            handleLonChange = {this.handleLonChange}
            lat = {this.state.lat}
            lon = {this.state.lon}
            geolocation = {this.geolocation}
            handleAddressSubmit = {this.handleAddressSubmit}
            city = {this.state.city}
            handleCityChange = {this.handleCityChange}
            state = {this.state.state}
            handleStateChange = {this.handleStateChange}
        />
        ) : ( 
          <div>
            <button onClick={this.changeLocation}>Change Location</button>
            {HourlyGrid}
          </div>
        )}
      </div>
    );
  }
}

export default App;
