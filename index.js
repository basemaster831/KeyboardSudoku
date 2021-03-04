
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

    grid.innerHTML = generateGrid(9);
// TODO decide if we even need guides?
function checkGuides(checkbox) {

    if(checkbox.checked) {
	
    } else {
	
    }

}

window.addEventListener("keydown", event => {
    if (!isNaN(event.key)) { // if it's a number (isNaN = is Not a Nunmber)
        cursorPointer(event.key);
    }

});


// FIXME problems with block being null or literal zero.
// Highlights the current block/tile.
function cursorPointer(number) {
    // ternary operator; if we have block selected,
    // let block = tile, else block = block.

    let block = cursor.block ?
    document.getElementById("t"+cursor.tile) :
    document.getElementById(number);

    // We don't have a block selected, select the block.
    if(!cursor.block) {
	cursor.block = number;
        block.classList.add("highlight");    
    } else if (cursor.block && !cursor.tile) {
        // We're now selecting the tile but before we must
        // remove the highlight class from the parent.
	console.log(typeof(block));
	cursor.tile = cursor.block+number;
	block = document.getElementById("t"+cursor.tile);
        block.parentElement.classList.remove("highlight");
        block.classList.add("highlight");
    } else if(cursor.block && cursor.tile) {
        // We have the block and tile selected, time to enter value
        // EXCEPTION: if value is 0 then we delete the value from the tile
        number == "0" ? block.textContent = "" : block.textContent = number;
	block.classList.remove("highlight");
	cursor.block = 0;
	cursor.tile = 0;
    }   

}

function createBlock(blockId) {
    let block = '<div id="'+blockId+'" class="block">';
    for(let i = 0; i < 9; i++) {
	var r = Math.random() < 0.5;
	block += '<div id="t'+blockId+GRID_POSITION_ARRAY[i]+'"data-tile="'+blockId+GRID_POSITION_ARRAY[i]+'"class="tile">'+ (!r ? "1":"")+'</div>';	
    }
    block += "</div>";
    return block;
}

function generateGrid(sudokuSize) {
    let sudokuGrid = "";
    for (let i = 0; i < sudokuSize; i ++) {
        sudokuGrid += createBlock(GRID_POSITION_ARRAY[i]);
    }
    return sudokuGrid;
}

