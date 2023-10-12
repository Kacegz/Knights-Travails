class Knight{
  moves=[
      [1,2],
      [2,1],
      [-1,2],
      [2,-1],
      [-2,-1],
      [-1,-2],
      [-2,1],
      [1,-2],
  ]
  checkMoves(passedMove){
    let possibleMoves=[]
    this.moves.forEach(move => {
      if(passedMove[0]+move[0]<8 && passedMove[0]+move[0]>=0 && passedMove[1]+move[1]<8 && passedMove[1]+move[1]>=0){
        possibleMoves.push([passedMove[0]+move[0],passedMove[1]+move[1]])
      }
    });
    return possibleMoves
  }
  knightMoves(start,dest){
    let queue=[]
    let visited=[]
    let distance=0
    queue.push(start)
    visited.push(start)
    while(queue.length!==0){
      let current=queue.shift()
      if(current[0]!==dest[0] || current[1]!==dest[1]){
      let nextmoves=this.checkMoves(current)
      nextmoves.forEach(next => {
        queue.push(next)
      });
      visited[current]=true
      }else{
        console.log(visited)
        return current
      }
    }
  }
  
}
let knight= new Knight
console.log(knight.knightMoves([0,0],[6,5]))