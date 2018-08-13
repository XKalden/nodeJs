var asyncAcc = (a,b) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                res( a + b)


            } else {
                rej('not WORK');
            }

        }, 2000);

    })
} 


asyncAcc(1 , 1).then((res)=> { console.log(res); return asyncAcc(res,1).then((res)=>{console.log(res)}, (err)=> { console.log( err, ' error2')});  }, (err)=>{console.log(err)} )


// var somePromice = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('rejected');

//     }, 2000);

// });



// somePromice.then((mesg)=>{console.log('Succes', mesg)}, (err) => {console.log('sad', err)});