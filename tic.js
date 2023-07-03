let turn="X";
let gameover=false;

const changeTurn=()=>{
return turn ==="X"?"0":"X";
}
const checkDrawn=()=>{
    const boxes = document.querySelectorAll(".game-box");
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
    if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "") {
      document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " won";
      document.querySelector('.img').style.width = "150px";
      gameover = true;
    } 
  });
  if (!gameover) {
    checkDrawn();
}
}
  


let boxes=document.querySelectorAll(".game-box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".game-text");
    element.addEventListener('click',()=>{
      console.log(gameover);
        if(boxtext.innerText===""){
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
document.querySelector('#reset').addEventListener('click',()=>{
boxes=document.querySelectorAll(".game-box");
    Array.from(boxes).forEach((el)=>{
    el.querySelector(".game-text").innerText="";
    });
    turn="X";
    gameover=false;
    document.querySelector('.turn').innerText="turn for "+turn;
    document.querySelector('.img').style.width="0px";
})