function init() {
    //generates the columns and rows and at the end appends them to the main div//
    // function generateElement(type, id, classList, style, text, parent = false, event = false)
    let main = document.getElementById("main");
    generateElement('div', 'header', 'row text-center w-75 d-block mx-auto bg-secondary text-white', '', "<strong>Tic Tac Toe</strong> <br> Player 1 = O <br> Player 2 = X", main);
    let row1 = generateElement('div', 'row1', 'row bg-primary w-50 mx-auto','height:75px;', '', '');
    generateElement('div', '0', 'content_center col-4 border border-secondary', '', '', row1, true);
    generateElement('div', '1', 'content_center col-4 border border-secondary', '', '', row1, true);
    generateElement('div', '2', 'content_center col-4 border border-secondary', '', '', row1, true);
    let row2 = generateElement('div', 'row2', 'row bg-info w-50 mx-auto','height:75px;', '', '');
    generateElement('div', '3', 'content_center col-4 border border-secondary', '', '', row2, true);
    generateElement('div', '4', 'content_center col-4 border border-secondary', '', '', row2, true);
    generateElement('div', '5', 'content_center col-4 border border-secondary', '', '', row2, true);
    let row3 = generateElement('div', 'row3', 'row bg-primary w-50 mx-auto','height:75px;', '', '');
    generateElement('div', '6', 'content_center col-4 border border-secondary', '', '', row3, true);
    generateElement('div', '7', 'content_center col-4 border border-secondary', '', '', row3, true);
    generateElement('div', '8', 'content_center col-4 border border-secondary', '', '', row3, true);
    generateElement('div', 'turn', 'row text-center d-block w-25 mx-auto bg-secondary text-white mt-2 mb-5', '', 'Player 1 it is your turn!', main, '');
    main.appendChild(row1);
    main.appendChild(row2);
    main.appendChild(row3);
}

//function to generate the elements used in init function
function generateElement(type, id, classList, style, text, parent = false, event = false) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList);
    newElement.innerHTML = text;
    newElement.setAttribute('style', style);

    if (parent) {
        parent.appendChild(newElement);
    }

    if (event) {
        newElement.addEventListener("click", isEven);
    }
    return newElement
}

let number = 0
let buttonData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winData = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//figures out if even or odd click (player one or two) and decides whether to put x or o
function isEven(e) {
    let identity = e.target.id;
    var v = 1;

    number++;
    if (number % 2 == 0) {
        document.getElementById(this.id).innerHTML = "⭕️";
        document.getElementById('turn').innerHTML = "Player 1 it is your turn!";
        document.getElementById(this.id).removeEventListener("click", isEven);
    }
    else {
        document.getElementById(this.id).innerHTML = "❌";
        document.getElementById('turn').innerHTML = "Player 2 it is your turn!";
        document.getElementById(this.id).removeEventListener("click", isEven);;
        v = 2;
    }
    buttonData[identity] = v;
    checkWin();
}
// add the sum of the id inside of the win condition and check if it is equal to 3 or 6 (without zeros)//
//loop through winData sums if no match, next player's turn//
function checkWin() {
    for (let i = 0; i < winData.length; i++) {
        var indexes = winData[i];
        var hasWon = true;
        var sum = 0;
       // for (var j = 0; j < indexes.length; j++) {
            sum = buttonData[indexes[0]] + buttonData[indexes[1]] + buttonData[indexes[2]];
            if (buttonData[indexes[0]] == 0 || buttonData[indexes[1]] == 0 || buttonData[indexes[2]] == 0) {
                hasWon = false;
            }
            if (hasWon) {
                if (sum == 3) {
                    return alert("player 2 wins 🎉")
                }
                if (sum == 6) {
                    return alert("player 1 wins 🎉")
                }
            }
        //}
    }
}

