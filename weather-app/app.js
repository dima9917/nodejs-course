const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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

var address = argv.address ? argv.address : '4225 NE 5th CT Renton WA';
address = encodeURIComponent(address);

geocode.geocodeAddress(address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temp}`);
                console.log(`It feels like ${weatherResults.apptemp}`);
            }  
        });
    }
});

