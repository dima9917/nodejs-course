
const request = require('request');

var geocodeAddress = (address, callback) => {
    const apiKey = 'AIzaSyBMaWgGOOXP_QvLzKZLni0MvWslgeNJSNU'

    const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${address}`;
    
    request({
        url: url,
        json: true
    }, (error, response, body) => {  
    
        if(body.status == 'OVER_QUERY_LIMIT'){
            callback(body.status);
        } else if (body.status == 'ZERO_RESULTS') {
            callback('no address found');
        } else {    
            callback(null, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            })
        }
    });
    

}




module.exports.geocodeAddress = geocodeAddress