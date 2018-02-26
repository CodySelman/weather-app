import React from 'react';
import PropTypes from 'prop-types';
import './hourlyWeather.css';

import { convertTimeStamp } from './utils';

const HourlyWeather = props => {
    return (
      <div className='HourlyWeather--container'>
          <p>{props.summary}</p>
          <p>{props.icon}</p>
          <p>{convertTimeStamp(props.time)}</p>
          <p>{props.temperature.toFixed(0)}&deg;F</p>
      </div>
    )
}
//summary icon time temperature
HourlyWeather.propTypes = {
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
}

export default HourlyWeather;