console.log("Starting app");

request = require('request');
yargs = require('yargs');
geocode = require('./geocode/geocode.js');
weather = require('./weather/weather.js');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address whose weather is to be determined.',
        string: true
    }
    })
        .help()
        .alias('help','h')
        .argv;

geocode.geocode_address(argv.a,(error,results) =>{
    if(error)
        console.log(error);
    else{
        //console.log(JSON.stringify(results,undefined,2));
        weather.get_weather(results.lat,results.lng,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            //console.log(JSON.stringify(result,undefined,2));
            console.log("Current temperature in: ",results.address," is: ",result.temp," Degree Fahrenheit ");
        }
})
}
})


//api key for forecast:  82521bc1a34149c4dce86fa9ae8ad30f