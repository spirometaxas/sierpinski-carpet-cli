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

const drawSquare = function(board, pos, scale, character) {
  var startX = pos.x - parseInt(getWidth(scale) / 2.0);
  var startY = pos.y - parseInt(getHeight(scale) / 2.0); 
  for (let i = 0; i < getHeight(scale); i++) {
    for (let j = 0; j < getWidth(scale); j++) {
      if (character !== undefined) {
        board[startY + i][startX + j] = character;
      } else {
        board[startY + i][startX + j] = '\u001b[7m \u001b[0m';
      }
    }
  }
}

const sierpinski = function(n, scale, board, pos, inverse, character) {
  if (n === 0) {
    if (!inverse) {
      drawSquare(board, pos, scale, character);
    }
    return;
  } else if (n > 0 && inverse) {
    drawSquare(board, pos, scale - 1, character);
  }

  sierpinski(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 1), y: pos.y - getHeight(scale - 1) }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x, y: pos.y - getHeight(scale - 1) }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 1), y: pos.y - getHeight(scale - 1) }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 1), y: pos.y }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 1), y: pos.y }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 1), y: pos.y + getHeight(scale - 1) }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x, y: pos.y + getHeight(scale - 1) }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 1), y: pos.y + getHeight(scale - 1) }, inverse, character);
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
  
  let scale = n;
  if (config && config.scale && config.scale > n) {
    scale = config.scale;
  }

  const inverse = config !== undefined && config.inverse === true;
  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  const board = createBoard(getWidth(scale), getHeight(scale));
  sierpinski(n, scale, board, { x: parseInt(getWidth(scale) / 2.0), y: parseInt(getHeight(scale) / 2.0) }, inverse, character);
  return draw(board);
}

module.exports = {
  create: create
};