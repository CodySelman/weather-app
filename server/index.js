//imports
const path = require('path');
const express = require('express');
const axios = require('axios');

//configuration
require('dotenv').config();
const{DARKSKY_API_KEY}=process.env;
const{GOOGLEMAPS_API_KEY} = process.env;

//creation of stuff
const serverApp = express();
const port = process.env.PORT || 5000;

//middleware
serverApp.use(express.static('client/build'));

serverApp.get('/forecast/:lat,:lon', function(request, response){
    const { lat, lon } = request.params;
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lon}`;
    axios.get(url)
    .then(res => {
        response.status(200).json(res.data);
    })
    .catch(err => {
        response.status(500).json({
            msg: 'Darksky failed on server index.js'
        })
    });
});

//lookup lat and lon by city and state
serverApp.get('/geocode/:city,:state', function(request, response) {
    const { city, state } = request.params;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=${GOOGLEMAPS_API_KEY}`;
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'Geocoding Failed.'
            })
        });
});

//lookup city and state by lat and lon
serverApp.get('/reverseGeocode/:lat,:lon', function(request, response) {
    const {lat, lon} = request.params;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLEMAPS_API_KEY}`;
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'Reverse Geocoding Failed.'
            })
        });
});

serverApp.get('*', (request, response) => {
    response.sendFile('index.html', {root: path.resolve('client/build')});
});

serverApp.listen(port, ()=> {
    console.log(`Now listening on port ${port}`);
});