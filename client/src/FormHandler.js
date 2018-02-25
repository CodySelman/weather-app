import React from 'react';
import PropTypes from 'prop-types';

//Components
import LatLonForm from './LatLonForm';
import GeolocationForm from './GeolocationForm';

const FormHandler = props => {
    //props go here
    return(
        <div>
            <LatLonForm 
                handleSubmit = {props.handleLatLonSubmit}
                handleLatChange = {props.handleLatChange}
                handleLonChange = {props.handleLonChange}
                lat = {props.lat}
                lon = {props.lon}
            />
            <GeolocationForm 
                geolocation = {props.geolocation}
            />
        </div>
    ) 
}

FormHandler.proptypes = {
    handleLatLonSubmit: PropTypes.func.isRequired,
    handleLatChange: PropTypes.func.isRequired,
    handleLonChange: PropTypes.func.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    geolocation: PropTypes.func.isRequired,
}

export default FormHandler;