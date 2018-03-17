const request = require('request');
var geocode_address = (address,callback) =>{
    var encoded_address = encodeURIComponent(address);
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address+'&key=%20%20AIzaSyCECABbg_LZZJFD7VDMBmML0jwj1V79nnI',
        json:true
    },(error,response,body) => {
        // console.log(JSON.stringify(body,undefined,2));
        if (error){
            callback("Unable to connect to the google servers. ");
            //console.log("Unable to connect to the google servers. ");
        }else if(body.status === 'ZERO_RESULTS'){
        //console.log('Address not found. ');
            callback("Address not found");
    }else if(body.status === 'OK'){
            /*
        console.log("ADRRESS:  ",body.results[0].formatted_address);
        console.log("LONGITUDE:  ",body.results[0].geometry.location.lng);
        console.log("LATITUDE:   ",body.results[0].geometry.location.lat);*/
            callback(undefined,{
                address: body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                lng:body.results[0].geometry.location.lng
            })
    }else{
        console.log("Some other error suspected. ");
    }


});

}

module.exports={
    geocode_address
};