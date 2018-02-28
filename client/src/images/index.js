import clearDay from './clear-day.png';
import clearNight from './clear-night.png';
import cloudy from './cloudy.png';
import fog from './fog.png';
import partlyCloudyDay from './partly-cloudy-day.png';
import partlyCloudyNight from './partly-cloudy-night.png';
import rain from './rain.png';
import sleet from './sleet.png';
import snow from './snow.png';
import wind from './wind.png';


const selection = (name) => {
    switch(name){
        case 'clear-day':
            return clearDay;
        case 'clear-night':
            return clearNight;
        case 'cloudy':
            return cloudy;
        case 'fog':
            return fog;
        case 'partly-cloudy-day':
            return partlyCloudyDay;
        case 'partly-cloudy-night':
            return partlyCloudyNight;
        case 'rain':
            return rain;
        case 'sleet':
            return sleet;
        case 'snow':
            return snow;
        case 'wind':
            return wind;
        default:
            return clearDay;
    }
}

export default selection;