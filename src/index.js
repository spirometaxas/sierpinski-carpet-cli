const getWidth = function(n) {
  return getHeight(n) * 2;
}

const getHeight = function(n) {
  return Math.pow(3, n);
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawSquare = function(board, pos, size, character) {
  var startX = pos.x - parseInt(getWidth(size) / 2.0);
  var startY = pos.y - parseInt(getHeight(size) / 2.0); 
  for (let i = 0; i < getHeight(size); i++) {
    for (let j = 0; j < getWidth(size); j++) {
      if (character !== undefined) {
        board[startY + i][startX + j] = character;
      } else {
        board[startY + i][startX + j] = '\u001b[7m \u001b[0m';
      }
    }
  }
}

const sierpinski = function(n, size, board, pos, inverse, character) {
  if (n === 0) {
    if (!inverse) {
      drawSquare(board, pos, size, character);
    }
    return;
  } else if (n > 0 && inverse) {
    drawSquare(board, pos, size - 1, character);
  }

  sierpinski(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1), y: pos.y - getHeight(size - 1) }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y - getHeight(size - 1) }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y - getHeight(size - 1) }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1), y: pos.y }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1), y: pos.y + getHeight(size - 1) }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y + getHeight(size - 1) }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: pos.y + getHeight(size - 1) }, inverse, character);
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }
  
  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const inverse = config !== undefined && config.inverse === true;
  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  const board = createBoard(getWidth(size), getHeight(size));
  sierpinski(n, size, board, { x: parseInt(getWidth(size) / 2.0), y: parseInt(getHeight(size) / 2.0) }, inverse, character);
  return draw(board);
}

module.exports = {
  create: create
};