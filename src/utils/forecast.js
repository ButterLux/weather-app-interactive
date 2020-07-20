const request = require('request')

const message = 'The weather is ' + body.current.weather_descriptions[0] +'. \nIt is currently ' + body.current.temperature + 
'F degrees. It is feels like ' + body.current.feelslike + 'F degrees outside. The humidity is' + body.current.humidity + '%'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e07e019bfa4c7a93a336f00d8eaf8221&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback ('Unable to connect to weather service!', undefine)
        } else if (body.error) {
            callback ('Unable to find location', undefined)
        } else {
            callback(undefined, message)
        }
    })
}

module.exports = forecast