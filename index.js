const assert = require('assert'),
      R = require('ramda');

// function describe() {};
//------------------------------------------------------------------------------
// 1. Live cell with fewer than 2 live neighbours dies
// 2. Live cell with 2 or 3 live neighbours lives
// 3. Live cell with more than 3 live neighbours dies
// 4. Dead cell with exactly 3 live neighbours becomes a live cell
//------------------------------------------------------------------------------

function neighboursCount(generation) {
    return R.filter(isAdjacentToZero, generation).length;
}

function areAdjecent(cellA, cellB) {
    return (
        Math.abs(cellB[0] - cellA[0]) <= 1 &&
        Math.abs(cellB[1] - cellA[1]) <= 1
    );
}

function isAdjacentToZero(p) {
    return areAdjecent([0, 0], p);
}

//------------------------------------------------------------------------------

describe('neighboursCount', () => {
    it('is a function', () => {
        assert.strictEqual(typeof neighboursCount, 'function');
    });

    it('is 0 on an empty generation', () => {
        assert.strictEqual(neighboursCount([], [0, 0]), 0);
    });

    it('is 1 for a generation-defining adjacent single cell', () => {
        assert.strictEqual(neighboursCount([[0, 0]], [0, 1]), 1);
    });

    it('is 0 for', () => {
        assert.strictEqual(neighboursCount([[1, 2]], [0, 0]), 0);
    });
});

describe('areAdjecent', () => {
    it('is false for 0,0 and 100,100', () => {
        assert(!areAdjecent([0, 0], [100, 100]));
    });

    it('is true for 0,0 and 1,0', () => {
        assert(areAdjecent([0, 0], [1, 0]));
    });

    it('is true for 1,0 and 0,0', () => {
        assert(areAdjecent([1, 0], [0, 0]));
    });

    it('is true for 0,0 and 0,1', () => {
        assert(areAdjecent([0, 0], [0, 1]));
    });

    it('is true for 0,1 and 0,0', () => {
        assert(areAdjecent([0, 1], [0, 0]));
    });
});

describe('isAdjacentToZero', () => {
    it('is a func', () => {
        assert.strictEqual(typeof isAdjacentToZero, 'function');
    });

    it('is true on 1,0', () => {
        assert(isAdjacentToZero([1, 0]));
    });
});
