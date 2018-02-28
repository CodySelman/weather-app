import React from 'react';
import Proptypes from 'prop-types';
import './DailyWeather.css';

import { convertTimeStampToDays } from './utils';
import images from './images';

const DailyWeather = props => {
    return(
        <div className='DailyWeather--container'>
            <ul className='DailyWeather--card'>
                <li className='DailyWeather--card-day'>{convertTimeStampToDays(props.time)}</li>
                <li className='DailyWeather--card-icon'>
                    <img className='DailyWeather--card-icon' src={images(props.icon)}/>
                </li>
                <li className='DailyWeather--card-temp'>{props.temperatureHigh}&deg; | {props.temperatureLow}&deg;</li>
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