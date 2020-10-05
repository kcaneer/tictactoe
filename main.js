function init() {
    let main = document.getElementById("main");
    generateElement('div', 'header', 'row text-center', "Tic Tac Toe", main);
    let row1 = generateElement('div', 'row1', 'row bg-primary', '', '');
    let col1 = generateElement('div', '', 'col-4', 1, row1);
    generateElement('div', '', 'col-4', 2, row1);
    generateElement('div', '', 'col-4', 3, row1);
    let row2 = generateElement('div', 'row2', 'row bg-info', '', '');
    generateElement('div', '', 'col-4', 4, row2);
    generateElement('div', '', 'col-4', 5, row2);
    generateElement('div', '', 'col-4', 6, row2);
    let row3 = generateElement('div', 'row3', 'row bg-primary', '', '');
    generateElement('div', '', 'col-4', 7, row3);
    generateElement('div', '', 'col-4', 8, row3);
    generateElement('div', '', 'col-4', 9, row3);
    main.appendChild(row1)
    main.appendChild(row2)
    main.appendChild(row3)
}
let number = 0

function whichSymbol() {
    // if () {
    //     return "X";
    // }
    // else {
    //     return "O";
    // }
    number++
    console.log(number)
}

function generateElement(type, id, classList, text, parent = false) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList)
    newElement.innerHTML = text
    newElement.addEventListener("click", whichSymbol)
   
    if (parent) {
        parent.appendChild(newElement);
    }
    return newElement
}


