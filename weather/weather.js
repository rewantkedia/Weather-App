const request = require('request');

var get_weather = (lat,lng,callback) =>{
    //console.log(uri);
    request({
        url:'https://api.darksky.net/forecast/82521bc1a34149c4dce86fa9ae8ad30f/'+lat+','+lng,
        json:true
    },(error,response,body)=> {
        if(error){
            callback("Unable to access the site");
        }
        else if(response.statusCode ==  404){
        callback("Unable to fetch the weather");
        }
        else if(response.statusCode ==  200)
        {
            callback(undefined,{
                temp : body.currently.temperature,
                appar_temp : body.currently.apparentTemperature
            })
        }
        else
        {
            console.log("ERROR");
        }
    }
)}

module.exports = {
    get_weather
};