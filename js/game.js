let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
 let turnO=true; 
 let count=1;

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach((box)=>{
 box.addEventListener('click',()=>{
  console.log("box was clicked",count);
  count++;
  if(turnO){
    box.innerHTML="O";
    turnO=false;
  }
  else{
    box.innerText="X";
    turnO=true;
  }
  box.disabled=true;
  checkWinner();
  if(count === 10 && count!="winner"){
    console.log("draw");
    draw();
  }
 });
 });

 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };

 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };

 const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };

 const draw=()=>{
   msg.innerText="Game is Draw";
   msgContainer.classList.remove("hide"); 
 };

 const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pat1Val= boxes[pattern[0]].innerText;
        let pat2Val=boxes[pattern[1]].innerText;
        let pat3Val=boxes[pattern[2]].innerText;
        
        if(pat1Val != "" && pat2Val !="" && pat3Val !=""){
            if(pat1Val === pat2Val && pat2Val===pat3Val){
                console.log("Winner",pat1Val)
                showWinner(pat1Val);
            }
            
        }
    }
 };

 const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

 }

 newGameBtn.addEventListener("click",resetGame);
 newGameBtn.addEventListener("click",()=>{
     window.location.reload();
 });
 resetbtn.addEventListener("click",resetGame);

