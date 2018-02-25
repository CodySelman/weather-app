import React from 'react';
import PropTypes from 'prop-types';

//Components
import LatLonForm from './LatLonForm';

const FormHandler = props => {
    //props go here
    return(
        <LatLonForm 
            handleSubmit = {props.handleLatLonSubmit}
            handleLatChange = {props.handleLatChange}
            handleLonChange = {props.handleLonChange}
            lat = {props.lat}
            lon = {props.lon}
        />
    ) 
}

export default FormHandler;