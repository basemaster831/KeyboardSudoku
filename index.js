
// Static grid array for numpad layout.
const GRID_POSITION_ARRAY = [7,8,9,4,5,6,1,2,3];

// The Sudoku Grid 
var grid = document.getElementById("sudoku");

//TODO implement difficulty
var difficulty = ""

var cursor = { 
    block: 0,
    tile: 0
};

function startGame() {
    // Triggered by the DOM event onclick, specified in HTML file.
}

window.addEventListener("keydown", event => {
    if (!isNaN(event.key)) { // if it's a number (isNaN = is Not a Nunmber)
        cursor_pointer(event.key);
    }
});

// Highlight the block if no block is selected, otherwise it will be a tile
function cursorPointer(number) {
    // ternary operator; if we have block selected,
    // let block = tile, else block = block.

    let block = cursor.block ?
    document.getElementById("t"+cursor.block+cursor.tile) :
    document.getElementById(number);

    block.classList.add("highlight");
    // We don't have a block selected, select the block.
    if(!cursor.block) {
        block.classList.add("highlight");    
    } else if (cursor.block) {
        // We're now selecting the tile but before we must
        // remove the highlight class from the parent.
        block.parentNode.classList.remove("highlight");
        block.classList.add("highlight");
    } else if(cursor.block && cursor.tile) {
        // We have the block and tile selected, time to enter value
        // EXCEPTION: if value is 0 then we delete the value from the tile
        number == "0" ? tile.textContent = "" : tile.textContent = number;

	cursor.block = 0;
	cursor.tile = 0;
    }   

}

// TODO create createBlock()



function generateTable(sudokuSize) {
    let sudokuGrid = "";
    for (let i = 0; i < sudokuSize; i ++) {
        sudokuGrid += createBlock(TABLE_POSITION_ARRAY[i]);
    }
    return sudokuGrid;
}

grid.innerHTML = generateTable(9);
