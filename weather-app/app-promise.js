const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            damand: false,
            alias: 'address',
            describe: 'Enter Address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = argv.address ? argv.address : '4225 NE 5th CT Renton WA';
encodedAddress = encodeURIComponent(encodedAddress);
const apiKey = 'AIzaSyBD66kLwRDVh17fGSUOglrFyR-MkquSdNs'

const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`;

axios.get(geoCodeURL)
    .then((response) => {
        if (response.data.error_message) {
            throw new Error(response.data.error_message);
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        const weather_apiKey = 'ca88340e86e80b7b8899d9818171a332'; 
        const weatherUrl = `https://api.darksky.net/forecast/${weather_apiKey}/${lat},${lng}`;
            console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    })
    .then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
    })
    .catch((e) => {

        console.log(e.message);

    });