function getValidMoves(current) {
  let i = current[0];
  let j = current[1];
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
  const possibleMoves = [];
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
  console.log(getValidMoves(start));
}

knightMoves([2, 2], [1, 2]);
