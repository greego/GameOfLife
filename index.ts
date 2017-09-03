import runPeriod from './src/boardState';

var currentBoard:Array<Boolean>[];

currentBoard = [
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, true,  true,  true,  false, false, false, false], 
[false, false, false, false, true,  false, true,  false, false, false, false], 
[false, false, false, false, true,  true,  true,  false, false, false, false], 
[false, false, false, false, true,  true,  true,  false, false, false, false], 
[false, false, false, false, true,  true,  true,  false, false, false, false], 
[false, false, false, false, true,  true,  true,  false, false, false, false], 
[false, false, false, false, true,  false, true,  false, false, false, false], 
[false, false, false, false, true,  true,  true,  false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false, false, false, false, false, false, false], 
];

setInterval(mainLoop, 1500, currentBoard);

function mainLoop(board:Array<Boolean[]>) {
    currentBoard = runPeriod(currentBoard);
    for (var i=0;i<currentBoard.length;i++) {
        var line = "";
        for (var j=0;j<currentBoard[0].length;j++) {
            if (currentBoard[i][j])
                line+=" * ";
            else
                line+="___";
        }
        console.log(line);
    }
    console.log("");
}