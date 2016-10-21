const assert = require('assert'),
      R = require('ramda');

//------------------------------------------------------------------------------

const game = {};

//------------------------------------------------------------------------------

describe('something abstract', () => {
    it('is abstract', () => {
        assert(true);
    });

    it('is concrete beyond decency', () => {
        assert.strictEqual(2, 2);
    });

    it('has nothing to do with this calculation', () => {
        assert.deepEqual(R.map(R.inc)([2]), [3]);
    });
});

describe('the game', () => {
    it('is an empty object', () => {
        assert.deepEqual(game, {});
    });
});
