import evaluateCell from '../src/rules';
import {expect} from 'chai';

import 'mocha';

describe('Conway\'s Game of Life - Rules', ()=>{
    it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation', ()=>{
        expect(evaluateCell(true, 0)).to.eql(false);
        expect(evaluateCell(true, 1)).to.eql(false);
    });
    it('Any live cell with two or three live neighbours lives on to the next generation', ()=>{
        expect(evaluateCell(true, 2)).to.eql(true);
        expect(evaluateCell(true, 3)).to.eql(true);
    }); 
    it('Any live cell with more than three live neighbours dies, as if by overpopulation', ()=>{
        expect(evaluateCell(true, 4)).to.eql(false);
        expect(evaluateCell(true, 5)).to.eql(false);
        expect(evaluateCell(true, 6)).to.eql(false);
        expect(evaluateCell(true, 7)).to.eql(false);
        expect(evaluateCell(true, 8)).to.eql(false);
    }); 
    it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', ()=>{
        expect(evaluateCell(false, 0)).to.eql(false);
        expect(evaluateCell(false, 1)).to.eql(false);
        expect(evaluateCell(false, 2)).to.eql(false);
        expect(evaluateCell(false, 3)).to.eql(true);
        expect(evaluateCell(false, 4)).to.eql(false);
        expect(evaluateCell(false, 5)).to.eql(false);
        expect(evaluateCell(false, 6)).to.eql(false);
        expect(evaluateCell(false, 7)).to.eql(false);
        expect(evaluateCell(false, 8)).to.eql(false);
    });
});