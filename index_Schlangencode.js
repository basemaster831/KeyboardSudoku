// load boards from file or manually
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

const fieldNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const blockOne = [55, 56, 57, 64, 65, 66, 73, 74, 75];
const blockTwo = [58, 59, 60, 67, 68, 69, 78, 76, 77, 78];
const blockThree = [61, 62, 63, 70, 71, 72, 79, 80, 81];
const blockFour = [28, 29, 30, 37, 38, 39, 46, 47, 48];
const blockFive = [31, 32, 33, 40, 41, 42, 49, 50, 51];
const blockSix = [34, 35, 36, 43, 44, 45, 52, 53, 54];
const blockSeven = [1, 2, 3, 10, 11, 12, 19, 20, 21];
const blockEight = [4, 5, 6, 13, 14, 15, 22, 23, 24];
const blockNine = [7, 8, 9, 16, 17, 18, 25, 26, 27];

var timer;
var selectedTile;
const NUMBERS = "numbers";
const BODY = "body";
const DARK = "dark";
const LIGHT = "light";
const HIDDEN = "hidden";
const SELECTED = "selected";
const TIMER = "timer";
const STARTBUTTON = "startButton";
const DIFF_EASY = "difficultyEasy";
const DIFF_MED = "difficultyMedium";
const DIFF_HARD = "difficultyHard";
const LIGHT_THEME = "themeLight";
const NUMBER_OF_TILES = 81;
const BOARD = "board";
const SELECTED_NINE = "selectedNine";
const SELECTED_TILE = "selectedTile";


window.onload = function () {
    getId(STARTBUTTON).addEventListener("click", startGame);
    updateMove();
}

window.addEventListener("keydown", function (event) {
    let key = event.key;
    console.log("hahaha: " + isValidTileNumber(key));
    if (event.key != null && isValidTileNumber(key)) {
        highlightBlock(key);
        // highlight the selected 9 fields
        // add another eventlistener

    }
    console.log("OK");
    alert(event.key);

    // if user pressed enter, check if the tile was selected

    // if it was NOT selected, select the tile according to the user's input

    // if it was selected, add the value into the field (and check its validity first)

});

function highlightBlock(key) {
    let tiles = querySelectorAll("div.tile");
    console.log("Woah it worked");
    if (key == 1) {
        blockOne.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 2) {
        blockTwo.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }   
    if (key == 3) {
        blockThree.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 4) {
        blockFour.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 5) {
        blockFive.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 6) {
        blockSix.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 7) {
        blockSeven.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 8) {
        blockEight.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    if (key == 9) {
        blockNine.forEach(function(tileId) {
            console.log(tileId);
            tiles[tileId - 1].classList.add(SELECTED_NINE);
        });
    }
    // TODO copy this 8 times -.-

}


function isValidTileNumber(key) {
    return fieldNumbers.includes(parseInt(key));
}

function updateMove() {
    // TODO implement
}

function startGame() {
    let board = getBoard();

    // TODO generate board here
    generateBoard(board);

    startTimer();

    setTheme();

    getId(NUMBERS).classList.remove(HIDDEN);
}

function setTheme() {
    getId(LIGHT_THEME).checked ? querySelector(BODY).classList.remove(DARK) : querySelector(BODY).classList.add(DARK);
}

function startTimer() {
    time = 0;
    getId(TIMER).textContent = getFormattedTime(time);

    // update timer every second
    timer = setInterval(function () {
        time++;
        getId(TIMER).textContent = getFormattedTime(time);
    }, 1000);
}

function getFormattedTime(time) {
    let minutes = get2DigitTime(Math.floor(time / 60));
    let seconds = get2DigitTime(time % 60);
    return minutes + ":" + seconds;
}

function get2DigitTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function getId(id) {
    return document.getElementById(id);
}

function getBoard() {
    let board;
    if (getId(DIFF_EASY).checked) {
        board = easy[0];
    } else if (getId(DIFF_MED).checked) {
        board = medium[0];
    } else {
        board = hard[0];
    }
    return board;
}

function generateBoard(board) {
    // clear previous boards
    clearPreviousBoards();

    let tileIdCount = 0;

    // create 81 tiles
    for (let i = 0; i < NUMBER_OF_TILES; i++) {
        let tile = document.createElement("div");
        if (board.charAt(i) != "-") {
            tile.textContent = board.charAt(i);
        } else {
            tile.addEventListener("keydown", function (event) {


                // if user pressed enter, check if the tile was selected

                // if it was NOT selected, select the tile according to the user's input

                // if it was selected, add the value into the field (and check its validity first)

            });
        }
        tile.id = tileIdCount;
        tileIdCount++;

       // tile.classList.add(getBlockNumber(tile.id)); TODO might remove

        // add tile class to all the tiles
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
            tile.classList.add("bottomBorder");
        }
        if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
            tile.classList.add("rightBorder");
        }




        getId(BOARD).appendChild(tile);
    }
}

// TODO might remove
function getBlockNumber(id) {
    let blockNumber;

    if (blockOne.includes(id)) {
        blockNumber = "blockOne";
    } else if (blockTwo.includes(id)) {
        blockNumber = "blockTwo";
    } else if (blockThree.includes(id)) {
        blockNumber = "blockThree";
    } else if (blockFour.includes(id)) {
        blockNumber = "blockFour";
    } else if (blockFive.includes(id)) {
        blockNumber = "blockFive";
    } else if (blockSix.includes(id)) {
        blockNumber = "blockSix";
    } else if (blockSeven.includes(id)) {
        blockNumber = "blockSeven";
    } else if (blockEight.includes(id)) {
        blockNumber = "blockEight";
    } else if (blockNine.includes(id)) {
        blockNumber = "blockNine";
    }
    return blockNumber;
}

function clearPreviousBoards() {
    let tiles = querySelectorAll(".tile");


    tiles.forEach(function (tile) {
        tile.remove();
    });

    // clear the timer
    if (timer) {
        clearTimeout(timer);
    }

    selectedTile = null;
}

function querySelectorAll(selector) {
    return document.querySelectorAll(selector);
}

function querySelector(selector) {
    return document.querySelector(selector);
}