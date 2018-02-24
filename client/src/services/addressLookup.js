import axios from 'axios';

export const addressLookup = (city, state) => {
    const url = `./geocode/json?address=${city},${state}`;
    return axios.get(url);
}