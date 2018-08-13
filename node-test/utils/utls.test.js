const expect = require('expect');
const utils = require('./utils');

it('should add two number', () => {
    var res = utils.add(33,11);
    // if (res !== 44){
    //     throw new Error(`Expected 44, but got ${res}`);
    // }

    expect(res).toBe(44).toBeA('number');
});


// async TEST
it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});




it('should square two number', () => {
    var res = utils.square(2,2);


    expect(res).toBe(4).toBeA('number');
});


//should verify frist and last names are set
it('should verify first and last name', () => {
    var user = {location: 'canada', age: 12};


    var res = utils.setName(user, 'tsering kalden');

    expect(res).toInclude({
        firstName: 'tsering',
        lastName: 'kalden'
    })
});






// assert it include firstName and lastName with proper values





// it('should expect some value', () => {
//     expect(12).toNotbe(12);
//     expect({name: 'kalden'}).toNotEqual({name: 'kalden'});
//     expect([2,3,4]).toExclude(1);

//     expect({
//         name: 'kalde',
//         age: 12
//     }).toExclude({
//         age:21
//     })

// });





