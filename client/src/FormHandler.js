import React from 'react';
import PropTypes from 'prop-types';
import './FormHandler.css';
import images from './images';

//Components
import LatLonForm from './LatLonForm';
import GeolocationForm from './GeolocationForm';
import AddressForm from './AddressForm';

const FormHandler = props => {
    //props go here
    return(
        <div className='FormHandler--container'>
            <div className='FormHandler--heading-container'>
                <img className='FormHandler--heading-image' src={images('cloudy')} />
                <h1 className='FormHandler-heading'>
                    Weather
                </h1>
                <img className='FormHandler--heading-image' src={images('cloudy')} />
            </div>
            
            <LatLonForm
                handleSubmit = {props.handleLatLonSubmit}
                handleLatChange = {props.handleLatChange}
                handleLonChange = {props.handleLonChange}
                lat = {props.lat}
                lon = {props.lon}
            />
            <p className='FormHandler--divider-text'>Or:</p>
            <AddressForm 
                handleSubmit = {props.handleAddressSubmit}
                city = {props.city}
                handleCityChange = {props.handleCityChange}
                state = {props.state}
                handleStateChange = {props.handleStateChange}
            />
            <p className='FormHandler--divider-text'>Or:</p>
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
    handleAddressSubmit: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    handleCityChange: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
    handleStateChange: PropTypes.func.isRequired,
}

export default FormHandler;