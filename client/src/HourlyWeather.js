import React from 'react';
import PropTypes from 'prop-types';
import './hourlyWeather.css';

import { convertTimeStamp } from './utils';
import images from './images';

const HourlyWeather = props => {
    return (
      <div className='HourlyWeather--card'>
          <p className='HourlyWeather--card-text'>{convertTimeStamp(props.time)}</p>
          <img src={images(props.icon)} />
          <p className='HourlyWeather--card-text'>{props.temperature.toFixed(0)}&deg;F</p>
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