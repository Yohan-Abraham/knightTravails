import { Queue } from './Queue.js';

class Path {
  constructor(currentNode, path) {
    this.currentNode = currentNode;
    this.path = path;
  }
}

function getValidMoves(current) {
  let i = current.currentNode[0];
  let j = current.currentNode[1];
  const moves = [
    [i + 2, j + 1],
    [i + 2, j - 1],
    [i - 2, j + 1],
    [i - 2, j - 1],
    [i + 1, j + 2],
    [i + 1, j - 2],
    [i - 1, j + 2],
    [i - 1, j - 2],
  ];
  let possibleMoves = [];
  for (let i = 0; i < moves.length; i++) {
    if (
      moves[i][0] >= 0 &&
      moves[i][0] <= 7 &&
      moves[i][1] >= 0 &&
      moves[i][1] <= 7
    ) {
      possibleMoves.push(moves[i]);
    }
  }
  return possibleMoves;
}

function knightMoves(start, target) {
  const visitedNodes = new Set();
  const queue = new Queue();
  const startPath = new Path(start, [start]);
  visitedNodes.add(`${start[0]},${start[1]}`);
  queue.enqueue(startPath);
  while (!queue.isEmpty()) {
    let currentPosition = queue.peek();
    queue.dequeue();
    //check if we have reached target
    if (
      currentPosition.currentNode[0] === target[0] &&
      currentPosition.currentNode[1] === target[1]
    ) {
      console.log(
        `You made it in ${currentPosition.path.length - 1} moves! Heres your path!`,
      );
      currentPosition.path.forEach((element) => {
        console.log(`[${element}]`);
      });
      break;
    }

    //check valid moves and create obj
    let validMoves = getValidMoves(currentPosition);
    for (let i = 0; i < validMoves.length; i++) {
      //update path
      if (!visitedNodes.has(`${validMoves[i][0]},${validMoves[i][1]}`)) {
        let newPath = new Path(validMoves[i], [
          ...currentPosition.path,
          validMoves[i],
        ]);
        queue.enqueue(newPath);
        visitedNodes.add(`${validMoves[i][0]},${validMoves[i][1]}`);
      }
    }
  }
}

knightMoves([3, 3], [4, 3]);
