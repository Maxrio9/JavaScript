const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';

      const result = Rooster.announceDawn();

      assert.equal(expected, result);
    })
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const number = '11';

      const result = Rooster.timeAtDawn(11);

      assert.strictEqual(number, result);
    });
    it('throws an error if passed a number less than 0', () => {
      assert.throws(() => {
        Rooster.timeAtDawn(-10);
      }, RangeError);
    });
    it('throws an error if passed a number more than 23', () => {
      assert.throws(() => {
        Rooster.timeAtDawn(25);
      }, RangeError);
    });
  })
})