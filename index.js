var board = document.getElementById("board");
const TABLE_POSITION_ARRAY = [7, 8, 9, 4, 5, 6, 1, 2, 3];
var cursor = {
    block: 0,
    tile: 0
};

window.onload = function () {
    getId(STARTBUTTON).addEventListener("click", startGame);
    updateMove();
}

window.addEventListener("keydown", event => {
    if (!isNaN(event.key)) { // if it's a number (isNaN = is Not a Nunmber)
        cursor_pointer(event.key);
    }
});

// Highlight the block if no block is selected, otherwise it will be a tile
function cursor_pointer(number) {
    let block = document.getElementById(number);
    if (cursor.tile) {
        let tile = document.getElementById("t" + cursor.block + cursor.tile);
    }
    // TODO keep going here
}

// TODO create createBlock()



function generateTable(sudokuSize) {
    let sudokuGrid = "";
    for (let i = 0; i < sudokuSize; i ++) {
        sudokuGrid += createBlock(TABLE_POSITION_ARRAY[i]);
    }
    return sudokuGrid;
}

board.innerHTML = generateTable(9);