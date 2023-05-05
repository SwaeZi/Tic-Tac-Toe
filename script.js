// Tic-Tac-Toe

const buttons = document.querySelectorAll(".btnoption");
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";

for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", function() {
        main(btn);
    });
};

function main(btn) {
    btn.innerHTML = currentPlayer;
};
 
function changePlayer(btn) {
    if (currentPlayer == "O") {
        currentPlayer == "X";
    } else {
        currentPlayer = "O";
    };
};