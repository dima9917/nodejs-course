const request = require('request');

var getWeather = (lat, lng, callback) => {
    const apiKey = 'ca88340e86e80b7b8899d9818171a332';
 
    const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback(null, {
                temp: body.currently.temperature,
                apptemp: body.currently.apparentTemperature                
            })

        } else {
            callback('unable to fetch weather', null)
        }
    });
}

module.exports.getWeather = getWeather;