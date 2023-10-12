class Knight {
  moves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [2, -1],
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [1, -2],
  ];
  checkMoves(passedMove) {
    let possibleMoves = [];
    this.moves.forEach((move) => {
      if (
        passedMove[0] + move[0] < 8 &&
        passedMove[0] + move[0] >= 0 &&
        passedMove[1] + move[1] < 8 &&
        passedMove[1] + move[1] >= 0
      ) {
        possibleMoves.push([passedMove[0] + move[0], passedMove[1] + move[1]]);
      }
    });
    return possibleMoves;
  }
  validate(start, dest) {
    if (
      start[0] >= 0 &&
      start[1] >= 0 &&
      start[0] < 8 &&
      start[1] < 8 &&
      dest[0] >= 0 &&
      dest[1] >= 0 &&
      dest[0] < 8 &&
      dest[1] < 8
    ) {
      return true;
    } else {
      return false;
    }
  }
  knightMoves(start, dest) {
    if (!this.validate(start, dest)) {
      console.log("Enter valid data");
      return;
    }
    let queue = [];
    let visited = [];
    let distance = [];
    let pre = [];
    for (let i = 0; i < 8; i++) {
      visited[i] = false;
      distance[i] = Number.MAX_VALUE;
      pre[i] = -1;
    }
    distance[start] = 0;
    queue.push(start);
    visited.push(start);
    while (queue.length !== 0) {
      let current = queue.shift();
      if (current[0] !== dest[0] || current[1] !== dest[1]) {
        let nextmoves = this.checkMoves(current);
        nextmoves.forEach((next) => {
          if (visited[next] !== true) {
            queue.push(next);
            visited[next] = true;
            distance[next] = distance[current] + 1;
            pre[next] = current;
          }
        });
        visited[current] = true;
      } else {
        let path = [];
        let fullPathString = "";
        path.push(dest);
        while (pre[dest] instanceof Array) {
          path.push(pre[dest]);
          dest = pre[dest];
        }
        for (let i = path.length - 1; i >= 0; i--) {
          fullPathString += "[" + path[i].toString() + "] -> ";
        }
        console.log("You made it in", distance[current], "moves!");
        console.log("This is your path: ", fullPathString.slice(0, -3));
      }
    }
  }
}
let knight = new Knight();
knight.knightMoves([0, 6], [4, 6]);
