//imports
const express = require('express');
const axios = require('axios');

//configuration
require('dotenv').config();
const{API_KEY}=process.env;

//creation of stuff
const serverApp = express();
const port = process.env.PORT || 5000;

serverApp.get('/forecast/:lat,:lon', function(request, response){
    const { lat, lon } = request.params;
    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
    axios.get(url)
    .then(res => {
        response.status(200).json(res.data);
    })
    .catch(err => {
        response.status(500).json({
            msg: 'Your stuff is broken.'
        })
    });
});

serverApp.listen(port, ()=> {
    console.log(`Now listening on port ${port}`);
});