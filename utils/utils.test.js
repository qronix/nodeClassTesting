const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', ()=>{
    var res = utils.add(33,11);

    expect(res).toBeA('number').toBe(44);
});

it('should square the number', ()=>{
    var res = utils.square(3);

    expect(res).toBeA('number').toBe(9);
});

it('should subtract the second number from the first',()=>{
    var res = utils.subtract(1,8);

    expect(res).toBeA('number').toBe(-7);
});

//should verify first and last names are set
//assert it includes firstName and lastName with proper values

it('should contain a user object with a first and last name',()=>{
    var user = {};
    var res = utils.setName(user,'Jon Head');

    expect(res).toInclude({
        firstName: 'Jon',
        lastName: 'Head'
    });
});

it('Should async add 2 numbers',(done)=>{
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});


// it('should expect some values',()=>{
//     expect({
//         name: 'Jon',
//         age:27,
//         location: 'Knoxville'
//     }).toInclude({
//         age:27
//     });
// });