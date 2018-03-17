console.log("Starting app");

request = require('request');
yargs = require('yargs');
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
//console.log(argv);
var encoded_address = encodeURIComponent(argv.a);
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address+'&key=%20%20AIzaSyCECABbg_LZZJFD7VDMBmML0jwj1V79nnI',
    json:true
},(error,response,body) => {
   // console.log(JSON.stringify(body,undefined,2));
    if (error){
        console.log("Unable to connect to the google servers. ");
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('Address not found. ');

    }else if(body.status === 'OK'){
        console.log("ADRRESS:  ",body.results[0].formatted_address);
        console.log("LONGITUDE:  ",body.results[0].geometry.location.lng);
        console.log("LATITUDE:   ",body.results[0].geometry.location.lat);
    }else{
    console.log("Some other error suspected. ");
}


});


