
const yargs = require('yargs');
const axios = require('axios');

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

var encoded_address = encodeURIComponent(argv.address);
var geocode_address = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address+'&key=%20%20AIzaSyCECABbg_LZZJFD7VDMBmML0jwj1V79nnI';
axios.get(geocode_address).then((response)=>{
    if(response.data.status == 'ZERO_RESULTS')
        throw new Error('Address not found.');
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weather_address = 'https://api.darksky.net/forecast/82521bc1a34149c4dce86fa9ae8ad30f/'+lat+','+lng;
    console.log("Address:   ",response.data.results[0].formatted_address);
    return axios.get(weather_address);

}).then((response)=>{
    console.log("Current Temperature here is:  ",response.data.currently.temperature ,"Degree Fahrenheit");
})
    .catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log("Unable to find the address.");
}
    else{
        console.log(e.message);
}
});
