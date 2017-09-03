import determineLiveNeighbours from './determineLiveNeighbours';
import evaluateCell from './rules';

export default function runPeriod(board:Array<Boolean[]>) :Array<Boolean[]> {
    var numberOfRows : number = board.length;
    var numberOfColumns : number = board[0].length;
    var ret : Array<Boolean[]> = [[]];
    for (var i=0;i<numberOfRows;i++)
    {
        var inner:Boolean[] = [];
        for (var j=0;j<numberOfColumns;j++)
        {
            inner[j] = evaluateCell(board[i][j], determineLiveNeighbours(board, i, j));
        }
        ret[i] = inner;
    }
    return ret;
}
