import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lat: 0,
      lon: 0,
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
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
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form>
          <label>Latitude:</label>
          <input onChange={(e)=>this.handleLatChange(e)} value={this.state.lat} step='.0001' type="number"/>
          <label>Longitude:</label>
          <input onChange={(e)=>this.handleLonChange(e)} value={this.state.lon} step='.0001' type="number"/>
          <button type='submit'>Get the Weather</button>
        </form>
      </div>
    );
  }
}

export default App;
