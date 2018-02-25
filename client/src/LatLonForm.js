import React from 'react';
import PropTypes from 'prop-types';

const LatLonForm = props => {
    const { handleSubmit, handleLatChange, handleLonChange, lat, lon} = props;
    return(
        <form onSubmit={e => props.handleSubmit(e)}>
          <label>Latitude:</label>
          <input
            min="-90"
            max="90"
            onChange={e => props.handleLatChange(e)}
            value={props.lat}
            step=".0001"
            type="number"
          />
          <label>Longitude:</label>
          <input
            min="-180"
            max="180"
            onChange={e => props.handleLonChange(e)}
            value={props.lon}
            step=".0001"
            type="number"
          />
          <button type="submit">Get the Weather</button>
        </form>
    )
}

export default LatLonForm;