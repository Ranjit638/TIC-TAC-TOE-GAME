let boxs = document.querySelectorAll(".box");
let reset1 = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let newbtn1 = document.querySelector("#new-btn")

let manO = true; //playerX, playerO
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetgame = ()=>{
    manO = true; 
    enableboxs();
    msgcontainer.classList.add("hide")



} 



boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click success")
        if (manO) { // playerO
            box.innerText = "O";
            manO = false;
        } else {// playerX
            box.innerText = "X"
            manO = true;
        }
        box.disabled = true;
        
        checkwinners();
    })
}
)
const disableboxs = () => {
    for (let box of boxs) {
        box.disabled = true;
    }

}

const enableboxs = ()=>{
    for (let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `CONGRATULATION WINNER IS ${winner}`
    msgcontainer.classList.remove("hide")
    disableboxs();



}
const draw = ()=>{

}


const checkwinners = () => {
    for (let pattern of winpattern) {
        let posva1 = boxs[pattern[0]].innerText;
        let posva2 = boxs[pattern[1]].innerText;
        let posva3 = boxs[pattern[2]].innerText;

        if (posva1 != "" && posva2 != "" && posva3 != "") {
            if (posva1 == posva2 && posva2 == posva3)
                 {
                console.log("winner", posva1)
                showwinner(posva1);

            }
            

        }

    }
}


newbtn1.addEventListener("click" ,resetgame);
reset1.addEventListener("click", resetgame );

