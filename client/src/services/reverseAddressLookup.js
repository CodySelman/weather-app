import axios from 'axios';

export const reverseAddressLookup = (lat, lon) => {
    const url = `/reverseGeocode/${lat},${lon}`;
    return axios.get(url);
}