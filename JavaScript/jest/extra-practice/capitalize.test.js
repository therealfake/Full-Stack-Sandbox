const capitalize = require('./capitalize');

it('check first character gets capitalized', () => {
    expect(capitalize('hi')).toEqual('Hi');
})

it('check non string no change', () => {
    expect(capitalize('6')).toEqual('6');
})