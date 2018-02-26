import React from 'react';
import PropTypes from 'prop-types';
import './hourlyWeather.css';

import { convertTimeStamp } from './utils';

const HourlyWeather = props => {
    return (
      <div className='HourlyWeather--container'>
          <p>Summary: {props.summary}</p>
          <p>Icon: {props.icon}</p>
          <p>Time: {convertTimeStamp(props.time)}</p>
          <p>Temperature: {props.temperature}&deg;F</p>
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