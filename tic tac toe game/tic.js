console.log("welcome to tic tac toe");
let turn = "X";
let isgameOver = false;


//function to change the turn
const changeTurn = () => {
    if (turn === "X") {
        return "0";
    }
    else {
        return "X";
    }
    //    return turn==="X"?"0":"X";    
}


//function to check for a win
const checkWin = () => {
    let textbox = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach(e => {
        if ((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = textbox[e[0]].innerText + ' Won';
            isgameOver = true;
            document.getElementsByClassName("info")[0].style.fontSize = '3rem';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
    // wins.forEach(e => {
    //     if ((textbox[e[3]].innerText === textbox[e[4]].innerText) && (textbox[e[5]].innerText === textbox[e[4]].innerText) && (textbox[e[0]].innerText !== "")) {
    //         document.querySelector('.info').innerText = textbox[e[3]].innerText + 'Won';
    //         isgameOver = true;
    //     }
    // })

}


//Main Game Logic

const boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }

    })
});


//reset the event

const reset = document.querySelector('#reset');

reset.addEventListener('click', function () {
    const boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((element) => {
        element.innerText = '';
    });
    turn = 'X';
    isgameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("info")[0].style.fontSize = '1rem';

})