const request = require('request');

var geocodeAddress = (address) => {

    return new Promise((res, rej ) => {

        setTimeout(() => {

            var encodedAddress = encodeURIComponent(address);

            request({
                url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json: true
            }, (error, response, body) => {

                if(error){
                    rej('errot didnt work');

                } else if (body.status === 'ZERO_RESULTS'){
                    rej('unabple to find addres');

                } else if (body.status === 'OK'){
                    res({      address: body.results[0].formatted_address,
                        lat: body.results[0].geometry.location.lat,
                        lng: body.results[0].geometry.location.lng
                    });
                }
            });

           

        }, 2000);
    });
};








geocodeAddress('000asdfasdfmaslkfdmlasnfn=0').then((location) => {
    console.log(JSON.stringify(location, undefined,2));
}, (errMessage) => {
    console.log(errMessage);
});


