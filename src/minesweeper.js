const generatePlayerBoard= (numberOfRows,numberOfColumns) =>{
    const board = [];
    for (let i =0 ; i<numberOfRows; i++){
        const row =[];
        for (let j = 0; j< numberOfColumns;j++){
            row.push(' ');
        }
        board.push(row);
    }
    return board;
  };
  const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs)=>{
    const board = [];
    let numberOfBombsPlaced = 0;
    for (let i =0 ; i<numberOfRows; i++){
        const row =[];
        for (let j = 0; j< numberOfColumns;j++){
            row.push(null);
        }
        board.push(row);
    }
    while (numberOfBombsPlaced<numberOfBombs){
      let randomRowIndex  =Math.floor(Math.random()*numberOfRows);
      let randomColumnIndex  =Math.floor(Math.random()*numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B'
      numberOfBombsPlaced+=1;
    }
    return board;
  };
  const printBoard = (board)=>{
    console.log(board.map(row => row.join(' | ')).join('\n'));

  }
  const playerBoard = generatePlayerBoard(3,4);
  let bombBoard = generateBombBoard(3,4,5);

  console.log('Player Board: ')
  printBoard(playerBoard);
  console.log('Bomb Board: ')
  printBoard(bombBoard);
