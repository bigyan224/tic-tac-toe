let turn="X";
let gameover=false;

const changeTurn=()=>{
return turn ==="X"?"0":"X";
}
const boxes = document.querySelectorAll(".game-box");
const checkDrawn=()=>{
  const boxtext = Array.from(boxes).map((box) => box.querySelector(".game-text").innerText);
  if (boxtext.every((text) => text !== "")) {
    document.querySelector('.turn').innerText = "Draw";
    gameover = true;
  }
}
const checkWin=()=>{
    boxtext=document.querySelectorAll('.game-text')
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
wins.forEach(e => {
    const box1 = boxes[e[0]];
    const box2 = boxes[e[1]];
    const box3 = boxes[e[2]];
    if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "") {
      document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " won";
      document.querySelector('.img').style.width = "150px";
      gameover = true;
      box1.classList.add('winning-box');
      box2.classList.add('winning-box');
      box3.classList.add('winning-box');
    } 
  });
  if (!gameover) {
    checkDrawn();
}
}
  


Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".game-text");
    element.addEventListener('click',()=>{
      console.log(gameover);
        if(boxtext.innerText==="" && gameover==false){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
    if(!gameover){
    document.getElementsByClassName("turn")[0].innerText="Turn for "+ turn;
    }
    if(turn=="X"){
        boxtext.style.color="red";
    }
    
    else if(turn=="0"){
        boxtext.style.color="blue";
    }
}

    })
    

})
document.querySelector('#reset').addEventListener('click', () => {
    let boxes = document.querySelectorAll(".game-box");
  
    boxes.forEach(box => {
      box.querySelector('.game-text').innerText = "";
      box.classList.remove('winning-box');
    });
  
    turn = "X";
    gameover = false;
    document.querySelector('.turn').innerText = "Turn for " + turn;
    document.querySelector('.img').style.width = "0px";
  });
  