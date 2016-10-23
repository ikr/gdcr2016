const assert = require('assert'),
      R = require('ramda');

// function describe() {};
//------------------------------------------------------------------------------
// 1. Live cell with fewer than 2 live neighbours dies
// 2. Live cell with 2 or 3 live neighbours lives
// 3. Live cell with more than 3 live neighbours dies
// 4. Dead cell with exactly 3 live neighbours becomes a live cell
//------------------------------------------------------------------------------

class World {
    constructor() {
        generation = new Generation();

    }
}

class Generation {
    evolve(aliveCells) {


        this.aliveCells.forEach(c => {

        });
    }
}

class Cell {
    constructor(state, position) {
        this.isAlive = state;
    }
    evolve(aliveCells) {
        this.isAlive = false;
        aliveCells.forEach(c => {
        });
    }
}

//------------------------------------------------------------------------------

describe('Cell', () => {
    describe('constructor', () => {
        it('assigns isAlive attribute', () => {
            const c = new Cell(true, [0,0]);
            assert(c.isAlive);
        });
    });
    describe('evolve', () => {
        it('should die when there are no neighbours', () => {
            const c = new Cell(true, [0,0]);
            c.evolve([]);
            assert(!c.isAlive);
        });
        it('should survive when there are two neighbours', () => {
            const cc = new Cell(true, [0,0]);
            const cd = new Cell(true, [1,0]);
            const ce = new Cell(true, [1,1]);
            cc.evolve([cd, ce]);
            assert(cc.isAlive);
        });
    });
});
