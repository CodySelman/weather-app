import axios from 'axios';

export const addressLookup = (city, state) => {
    const url = `./geocode/${city},${state}`;
    return axios.get(url);
}