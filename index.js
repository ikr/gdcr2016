const assert = require('assert'),
      R = require('ramda');

// function describe() {};
//------------------------------------------------------------------------------
// 1. Live cell with fewer than 2 live neighbours dies
// 2. Live cell with 2 or 3 live neighbours lives
// 3. Live cell with more than 3 live neighbours dies
// 4. Dead cell with exactly 3 live neighbours becomes a live cell
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
