export default function evaluateCell(cellState: Boolean, numberOfLiveNeighbours: Number) : Boolean {
    if (numberOfLiveNeighbours == 3)
        return true;
    if (cellState && numberOfLiveNeighbours == 2)
        return true;
    return false;
}
