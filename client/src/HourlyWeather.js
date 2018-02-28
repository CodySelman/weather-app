import React from 'react';
import PropTypes from 'prop-types';
import './hourlyWeather.css';

import { convertTimeStampToHours } from './utils';
import images from './images';

const HourlyWeather = props => {
    return (
      <div className='HourlyWeather--card'>
          <p className='HourlyWeather--card-time'>{convertTimeStampToHours(props.time)}</p>
          <img className='HourlyWeather--card-icon' src={images(props.icon)} />
          <p className='HourlyWeather--card-temperature'>{props.temperature.toFixed(0)}&deg;</p>
      </div>
    )
}

HourlyWeather.propTypes = {
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
}

export default HourlyWeather;