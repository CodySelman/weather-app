import React from 'react';
import PropTypes from 'prop-types';

import { convertTimeStamp } from './utils';

const HourlyWeather = props => {
    return (
      <section>
        <ul>
          <li>Summary: {props.summary}</li>
          <li>Icon: {props.icon}</li>
          <li>Time: {convertTimeStamp(props.time)}</li>
          <li>Temperature: {props.temperature}&deg;F</li>
        </ul>
      </section>
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