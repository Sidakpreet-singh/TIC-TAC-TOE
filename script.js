let boxes = document.querySelectorAll(".box");
let winpatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let turnO = true;
let rstbtn = document.querySelector("#rst");
let newbtn = document.querySelector(".nbtn");
let msgb = document.querySelector(".msgbox");
let msg = document.querySelector(".msgp");
let count = 0;


const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showwinner(pos1Val);
                
            }
        }
    }
    
}
const resetgame = () => {
    turnO = true;
    enableboxes();
    count=0;
    msgb.classList.add("hide");
}
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};
const showwinner = (winner) => {
    msg.innerText = `CONGRATS winner is ${winner}`;
    msgb.classList.remove("hide");
    disableboxes();
}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            
        }
        else {
            box.innerText = "X";
            turnO = true;
            
        }
        box.disabled = true;
        count++;
        let isWinner = checkwinner();
        
        if (count === 9 && !isWinner) {
            draw();
        }
    });
    
});
const draw = () => {
    msg.innerText = "GAME DRAW ! PLAY AGAIN";
    msgb.classList.remove("hide");
    disableboxes();
}


rstbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);