import axios from 'axios';

export const addressLookup = (streetAddress, city, state) => {
    const url = `./geocode/json?address=${streetAddress},${city},${state}`;
    return axios.get(url);
}