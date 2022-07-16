const reverseString = require('./reverseString');

it('reverses odd length string', () => {
    expect(reverseString('bye')).toEqual('eyb');
});

it('reverses even length string', () => {
    expect(reverseString('cars')).toEqual('srac');
});