import determineLiveNeighbours from '../src/determineLiveNeighbours';
import {expect} from 'chai';

import 'mocha';

describe('Conway\'s Game of Life - Find a cell\'s live neighbours', ()=>{
    it('1x1', ()=>{
        expect(determineLiveNeighbours([[false]], 0, 0)).to.eql(0);
        expect(determineLiveNeighbours([[true]], 0, 0)).to.eql(0);
    });
    it('1x2', ()=>{
        expect(determineLiveNeighbours([[false, false]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[false, false]], 0, 1)).to.eql(0);    
        expect(determineLiveNeighbours([[false, true]], 0, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[false, true]], 0, 1)).to.eql(0);
        expect(determineLiveNeighbours([[true, false]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[true, false]], 0, 1)).to.eql(1);    
        expect(determineLiveNeighbours([[true ,true]], 0, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[true, true]], 0, 1)).to.eql(1);
    });
    it('1x3', ()=>{
        expect(determineLiveNeighbours([[false, false, false]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[false, false, false]], 0, 1)).to.eql(0);    
        expect(determineLiveNeighbours([[false, false, false]], 0, 2)).to.eql(0);    
        expect(determineLiveNeighbours([[true, false, false]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[true, false, false]], 0, 1)).to.eql(1);    
        expect(determineLiveNeighbours([[true, false, false]], 0, 2)).to.eql(0);    
        expect(determineLiveNeighbours([[true, false, true]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[true, false, true]], 0, 1)).to.eql(2);    
        expect(determineLiveNeighbours([[true, false, true]], 0, 2)).to.eql(0);    
        expect(determineLiveNeighbours([[true, true, true]], 0, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[true, true, true]], 0, 1)).to.eql(2);    
        expect(determineLiveNeighbours([[true, true, true]], 0, 2)).to.eql(1);  
        expect(determineLiveNeighbours([[false, true, true]], 0, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[false, true, true]], 0, 1)).to.eql(1);    
        expect(determineLiveNeighbours([[false, true, true]], 0, 2)).to.eql(1);  
        expect(determineLiveNeighbours([[false, false, true]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[false, false, true]], 0, 1)).to.eql(1);    
        expect(determineLiveNeighbours([[false, false, true]], 0, 2)).to.eql(0); 
    });
    it('2x1', ()=>{
        expect(determineLiveNeighbours([[false], [false]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[false], [false]], 1, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[false], [true]], 0, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[false], [true]], 1, 0)).to.eql(0);
        expect(determineLiveNeighbours([[true], [false]], 0, 0)).to.eql(0);    
        expect(determineLiveNeighbours([[true], [false]], 1, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[true], [true]], 0, 0)).to.eql(1);    
        expect(determineLiveNeighbours([[true], [true]], 1, 0)).to.eql(1);
    });
    it('2x2', ()=>{
        expect(determineLiveNeighbours([[false, false], [false, false]], 0, 0)).to.eql(0);
        expect(determineLiveNeighbours([[false, false], [false, false]], 0, 1)).to.eql(0);
        expect(determineLiveNeighbours([[false, false], [false, false]], 1, 0)).to.eql(0);
        expect(determineLiveNeighbours([[false, false], [false, false]], 1, 1)).to.eql(0);
        expect(determineLiveNeighbours([[false, true], [false, false]], 0, 0)).to.eql(1);
        expect(determineLiveNeighbours([[false, true], [false, false]], 0, 1)).to.eql(0);
        expect(determineLiveNeighbours([[false, true], [false, false]], 1, 0)).to.eql(1);
        expect(determineLiveNeighbours([[false, true], [false, false]], 1, 1)).to.eql(1);
    });
});