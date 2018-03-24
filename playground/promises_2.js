const request = require('request');
var geocode = (address) =>
{
    return new Promise((resolve,reject) =>{
        var encoded_address = encodeURIComponent(address);
        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address+'&key=%20%20AIzaSyCECABbg_LZZJFD7VDMBmML0jwj1V79nnI',
            json:true
        },(error,response,body) =>{
            if(error)
                reject("Error Occured.");
            else
                resolve({
                    address: body.results[0].formatted_address,
                    lat:body.results[0].geometry.location.lat,
                    lng:body.results[0].geometry.location.lng
                })
})
    })
}

geocode('110042').then((object)=>{
    console.log(object.address);
},(message)=>{
    console.log(message);
});