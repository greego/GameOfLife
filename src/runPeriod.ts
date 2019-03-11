import determineLiveNeighbours from './determineLiveNeighbours';
import evaluateCell from './rules';

export default function runPeriod(board:Array<Boolean[]>) :Array<Boolean[]> {
    var newBoard : Array<Boolean[]> = [];
    var rowNumber = 0;
    var columnNumber = 0;
    for (var row of board)
    {
        var newRow:Boolean[] = [];
        for (var cell of row)
        {
            newRow.push(evaluateCell(cell, determineLiveNeighbours(board, rowNumber, columnNumber)));
            columnNumber++;
        }
        newBoard.push(newRow);
        rowNumber++;
        columnNumber=0;
    }
    return newBoard;
}
