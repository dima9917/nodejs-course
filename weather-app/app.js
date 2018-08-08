
const yargs = require('yargs');

const geocode = require('./geocode/geocode')

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
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, null, 2));
    }
});

