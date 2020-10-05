function init() {
    let main = document.getElementById("main");
    generateElement('div', 'header', 'row text-center', "Tic Tac Toe", main);
    let row1 = generateElement('div', 'row1', 'row bg-primary', '', '');
    generateElement('div', 'col1', 'col-4', 1, row1, true);
    generateElement('div', 'col2', 'col-4', 2, row1, true);
    generateElement('div', 'col3', 'col-4', 3, row1, true);
    let row2 = generateElement('div', 'row2', 'row bg-info', '', '');
    generateElement('div', 'col4', 'col-4', 4, row2, true);
    generateElement('div', 'col5', 'col-4', 5, row2, true);
    generateElement('div', 'col6', 'col-4', 6, row2, true);
    let row3 = generateElement('div', 'row3', 'row bg-primary', '', '');
    generateElement('div', 'col7', 'col-4', 7, row3, true);
    generateElement('div', 'col8', 'col-4', 8, row3, true);
    generateElement('div', 'col9', 'col-4', 9, row3, true);
    main.appendChild(row1)
    main.appendChild(row2)
    main.appendChild(row3)
}

let number = 0

function isEven(){
    number++;

    if (number % 2 == 0) {
         document.getElementById(this.id).innerHTML= "X";
    }
    else {
        document.getElementById(this.id).innerHTML= "O";
    }
}
 

function generateElement(type, id, classList, text, parent = false, event = false) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList)
    newElement.innerHTML = text
   
    if (parent) {
        parent.appendChild(newElement);
    }

    if (event) {
        newElement.addEventListener("click", isEven)
    }
    return newElement
}


