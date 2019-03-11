import runPeriod from '../src/runPeriod';
import {expect} from 'chai';

import 'mocha';

describe('Conway\'s Game of Life - Examples', ()=>{
    it('1x1 dead cell generates dead cell', ()=>{
        const input = [[false]];
        const expected = [[false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('1x1 live cell generates dead cell', ()=>{
        const input = [[true]];
        const expected = [[false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('1x2 dead cells generates dead cells', ()=>{
        const input = [[false], [false]];
        const expected = [[false], [false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
        it('1x2 one dead, one live generates dead cells', ()=>{
        const input = [[false], [true]];
        const expected = [[false], [false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('2x2 all dead generates dead cells', ()=>{
        const input = [[false, false], [false, false]];
        const expected = [[false, false], [false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('3x3 all dead generates dead cells', ()=>{
        const input = [[false, false, false], [false, false, false], [false, false, false]];
        const expected = [[false, false, false], [false, false, false], [false, false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('3x3 one alive in centre generates dead cells', ()=>{
        const input = [[false, false, false], [false, true, false], [false, false, false]];
        const expected = [[false, false, false], [false, false, false], [false, false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('3x3 two alive generates dead cells', ()=>{
        const input = [[false, false, false], [false, true, true], [false, false, false]];
        const expected = [[false, false, false], [false, false, false], [false, false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('Block', ()=>{
        const input = [[false, false, false, false], 
                       [false, true, true, false], 
                       [false, true, true, false], 
                       [false, false, false, false]];
        const expected = [[false, false, false, false], 
                          [false, true, true, false], [false, true, true, false], [false, false, false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('Beehive', ()=>{
        const input = [[false, false, false, false, false, false],
                       [false, false, true, true, false, false],
                       [false, true, false, false, true, false], 
                       [false, false, true, true, false, false],
                       [false, false, false, false, false, false]];
        const expected = [[false, false, false, false, false, false],
                          [false, false, true, true, false, false],
                          [false, true, false, false, true, false], 
                          [false, false, true, true, false, false],
                          [false, false, false, false, false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('Blinker period 1', ()=>{
        const input = [[false, false, false], 
                       [true, true, true], 
                       [false, false, false]];
        const expected = [[false, true, false], 
                          [false, true, false], 
                          [false, true, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });
    it('Blinker period 2', ()=>{
        const input = [[false, true, false], 
                       [false, true, false], 
                       [false, true, false]];
        const expected = [[false, false, false], 
                          [true, true, true], 
                          [false, false, false]];
        const result = runPeriod(input);
        expect(result).to.eql(expected);
    });

});
