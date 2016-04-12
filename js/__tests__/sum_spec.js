jest.dontMock('../sum'); // unmock to use the actual implementation of sum

describe('sum', function () {
  it('adds 1 + 2 to equal 3', function () {
    const sum = require('../sum');
    expect(sum(1, 2)).toBe(3);
  });
});