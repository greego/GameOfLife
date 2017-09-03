export default function determineLiveNeighbours(board:Array<Boolean[]>, cellRow:number, cellColumn:number):number{
    var liveNeighbours = 0;
    var width = board.length;
    var length = board[0].length;
    
    if (length > 0 && width > 0) {
        if (cellRow - 1 >= 0 && cellColumn - 1 >= 0 && board[cellRow-1][cellColumn-1])
            liveNeighbours++;
        if (cellRow - 1 >= 0 && board[cellRow-1][cellColumn])
            liveNeighbours++;
        if (cellRow - 1 >= 0 && cellColumn + 1 < length && board[cellRow-1][cellColumn+1])
            liveNeighbours++;
        if (cellColumn - 1 >= 0 && board[cellRow][cellColumn-1])
            liveNeighbours++;
        if (cellColumn + 1 < length && board[cellRow][cellColumn+1])
            liveNeighbours++;
        if (cellRow + 1 < width && cellColumn - 1 >= 0 && board[cellRow+1][cellColumn-1])
            liveNeighbours++;
        if (cellRow + 1 < width && board[cellRow+1][cellColumn])
            liveNeighbours++;
        if (cellRow + 1 < width && cellColumn + 1 < length && board[cellRow+1][cellColumn+1])
            liveNeighbours++;
    }
    return liveNeighbours;
}