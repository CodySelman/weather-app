import React from 'react';
import PropTypes from 'prop-types';
import './LatLonForm.css';

const GeolocationForm = props => {
    return (
        <div className='LatLonForm--container'>
           <button className='LatLonForm-button GeolocationForm-button' onClick={props.geolocation}>Use Geolocation</button>
        </div>
    )
}

GeolocationForm.propTypes = {
    geolocation: PropTypes.func.isRequired
}

export default GeolocationForm;