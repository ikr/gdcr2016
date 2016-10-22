const assert = require('assert'),
      R = require('ramda');

// function describe() {};
//------------------------------------------------------------------------------
// 1. Live cell with fewer than 2 live neighbours dies
// 2. Live cell with 2 or 3 live neighbours lives
// 3. Live cell with more than 3 live neighbours dies
// 4. Dead cell with exactly 3 live neighbours becomes a live cell
//------------------------------------------------------------------------------

function newGeneration(currentGeneration) {
    return currentGeneration;
}

function livingNeighboursCount() {
    return 0;
}

function allAdjacentCoordinates() {
    const result = [];

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) continue;
            result.push([i, j]);
        }
    }

    return result;
}

//------------------------------------------------------------------------------


describe('newGeneration', () => {
    it('is identical on an empty generation', () => {
        assert.deepEqual(newGeneration([]), []);
    });

    it('is identical on a 3-cell triangle', () => {
        assert.deepEqual(
            newGeneration([[0, 0], [0, 1], [1, 1]]),
            [[0, 0], [0, 1], [1, 1]]
        );
    });

    it.skip('is empty on a lonely cell', () => {
        assert.deepEqual(newGeneration([[0, 0]]), []);
    });
});

describe('livingNeighboursCount', () => {
    it('is 0 for an empty generation', () => {
        assert.strictEqual(livingNeighboursCount([0, 0], []), 0);
    });

    it.skip('is 1 for a dead sibling of a living cell', () => {
        assert.strictEqual(
            livingNeighboursCount([0, 0], [[0, 1]]),
            1
        );
    });
});

describe('allAdjacentCoordinates', () => {
    it('is an enumeration of all the deltas for (0, 0)', () => {
        assert.deepEqual(allAdjacentCoordinates([0, 0]), [
            [ -1, -1 ],
            [ -1, 0 ],
            [ -1, 1 ],
            [ 0, -1 ],
            [ 0, 1 ],
            [ 1, -1 ],
            [ 1, 0 ],
            [ 1, 1 ]
        ]);
    });

    it('is correct for (1, 0)', () => {
        assert.deepEqual(allAdjacentCoordinates([1, 0]), [
            [ 0, -1 ],
            [ 0, 0 ],
            [ 0, 1 ],
            [ 1, -1 ],
            [ 1, 1 ],
            [ 2, -1 ],
            [ 2, 0 ],
            [ 2, 1 ]
        ]);
    });
});
