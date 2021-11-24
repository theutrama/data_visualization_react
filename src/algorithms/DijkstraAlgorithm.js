const node = {
    row,
    col,
    isVisited,
    distance
}

function dijkstra(grid, startNode, finishNode) {
    if(!startNode || !finishNode || startNode===finishNode){
        return false;
    }
    
    const visitedNodesInOrder = [];

    startNode.distance = 0;
    const unvisitedNodes = getUnvisitedGridNodes();
}

function getUnvisitedGridNodes() {
    //TODO
}