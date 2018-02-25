import React from 'react';
import PropTypes from 'prop-types';

const GeolocationForm = props => {
    return (
        <button onClick={props.geolocation}>Use Geolocation</button>
    )
}

GeolocationForm.propTypes = {
    geolocation: PropTypes.func.isRequired
}

export default GeolocationForm;