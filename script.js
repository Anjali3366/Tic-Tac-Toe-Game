// accessing the boxes and reset btn
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");

// to access the turn of user
let turnO = true;

// we have to store the winning pattern to consider winner  (in array )

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// function ::

// to check the winner of game
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText,
      pos2Val = boxes[pattern[1]].innerText,
      pos3val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3val) {
        alert(`!! Congratulations , Winner is ${pos1Val} player  !!`);
        disabledBoxes();
        resetGame();
      }
    }
  }
};
// to reset the game
const resetGame = () => {
  turnO = true;
  enableBoxes();
};
// to disabled all the boxes so no-one enter the X and O
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// to enable all the boxes so anyone enter the X and O
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// adding eventlistener::

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    // this function will check the winner
    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  alert(`Click OK !! To reset the game `);
  resetGame();
});

newBtn.addEventListener("click", () => {
  alert(`Click OK !! To start the game `);
  resetGame();
});
