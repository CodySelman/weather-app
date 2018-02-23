import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form>
          <label>Latitude:</label>
          <input step='.0001' type="number"/>
          <label>Longitude:</label>
          <input step='.0001' type="number"/>
          <button type='submit'>Get the Weather</button>
        </form>
      </div>
    );
  }
}

export default App;
