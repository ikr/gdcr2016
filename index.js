const assert = require('assert'),
      R = require('ramda');

// function describe() {};
//------------------------------------------------------------------------------
// 1. Live cell with fewer than 2 live neighbours dies
// 2. Live cell with 2 or 3 live neighbours lives
// 3. Live cell with more than 3 live neighbours dies
// 4. Dead cell with exactly 3 live neighbours becomes a live cell
//------------------------------------------------------------------------------

function evolve(generation) {
    const nextGeneration = [];

    generation.forEach(p => {
        let neighboursCount = 0;

        generation.forEach(q => {
            if (Math.abs(p[0] - q[0]) <= 1 && Math.abs(p[1] - q[1]) <= 1) {
                neighboursCount++;
            }
        });

        neighboursCount--;

        if (neighboursCount === 2 || neighboursCount === 3) {
            nextGeneration.push(p);
        }
    });

    generation.forEach(p => {
        const neighbours = [
            [p[0] - 1, p[1] - 1],
            [p[0] - 1, p[1]],
            [p[0] - 1, p[1] + 1],
            [p[0], p[1] - 1],
            [p[0], p[1] + 1],
            [p[0] + 1, p[1] - 1],
            [p[0] + 1, p[1]],
            [p[0] + 1, p[1] + 1]
        ];

        const newBorn = [];
    });

    generation.length = 0;
    nextGeneration.forEach(p => {
        generation.push(p);
    });
}

//------------------------------------------------------------------------------

describe('evolve', () => {
    it('is identical on an empty generation', () => {
        const generation = [];
        evolve(generation);
        assert.deepEqual(generation, []);
    });

    it('eradicates a singleton', () => {
        const generation = [[0, 0]];
        evolve(generation);
        assert.deepEqual(generation, []);
    });

    it('keeps the middle of 3 in a row', () => {
        const generation = [[0, 0], [1, 0], [2, 0]];
        evolve(generation);
        assert.deepEqual(generation, [[1, 0]]);
    });

    it('keeps the block intact', () => {
        const generation = [
            [0, 0], [1, 0],
            [0, 1], [1, 1]
        ];

        evolve(generation);
        assert.deepEqual(generation, [
            [0, 0], [1, 0],
            [0, 1], [1, 1]
        ]);
    });

    it('blinks', () => {
        const generation = [[0, 0], [1, 0], [2, 0]];
        evolve(generation);
        assert.deepEqual(generation, [[-1, 1], [1, 0], [1, 1]]);
    });
});
