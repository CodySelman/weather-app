import React from 'react';
import PropTypes from 'prop-types';
import './LatLonForm.css';

const AddressForm = props => {
    return (
        <form className='LatLonForm--container' onSubmit={e => props.handleSubmit(e)}>
          <label className='LatLonForm-text'>City</label>
          <input className='LatLonForm-input'
            type="text" 
            value={props.city}
            onChange = { e => props.handleCityChange(e)} />
          <label className='LatLonForm-text'>State</label>
          <input className='LatLonForm-input'
            type="text"
            value={props.state}
            onChange = { e => props.handleStateChange(e)} />
          <button className='LatLonForm-button' type='submit'>Get Weather</button>
        </form>
    )
}

AddressForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    handleCityChange: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
    handleStateChange: PropTypes.func.isRequired
}

export default AddressForm;