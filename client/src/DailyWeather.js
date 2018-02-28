import React from 'react';
import Proptypes from 'prop-types';
import './DailyWeather.css';

import { convertTimeStampToDays } from './utils';
import images from './images';

const DailyWeather = props => {
    return(
        <div>
            <ul className='DailyWeather--card'>
                <li>{convertTimeStampToDays(props.time)}</li>
                <li>{props.icon}</li>
                <li>{props.temperatureLow}</li>
                <li>{props.temperatureHigh}</li>
            </ul>
        </div>
    )
}

DailyWeather.propTypes = {
    time: Proptypes.number.isRequired,
    icon: Proptypes.string.isRequired,
    temperatureLow: Proptypes.number.isRequired,
    temperatureHigh: Proptypes.number.isRequired
}

export default DailyWeather;