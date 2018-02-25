import React from 'react';
import PropTypes from 'prop-types';

const AddressForm = props => {
    return (
        <form onSubmit={e => props.handleSubmit(e)}>
          <label>City</label>
          <input 
            type="text" 
            value={props.city}
            onChange = { e => props.handleCityChange(e)} />
          <label>State</label>
          <input 
            type="text"
            value={props.state}
            onChange = { e => props.handleStateChange(e)} />
          <button type='submit'>Get Weather</button>
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