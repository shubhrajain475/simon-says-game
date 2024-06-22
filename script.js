
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"]

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started==false){
    console.log("Game Started");
    started=true;

    levelup();
}
});
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
},250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}
function levelup(){
    userSeq=[]
level++;
h2.innerText=`level ${level}`

let randomIdx=Math.floor(Math.random()*3);
let randColor=btns[randomIdx];
let randbtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq)
gameFlash(randbtn);
}


function checkAns(idx){
   // console.log("curr level",level);
//    let idx=level-1;
   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
     setTimeout(levelup,1000);   
    }
    console.log("same value");
   }
   else{
    h2.innerHTML=`Game over! Your Score was <b>${level}</b><br>Press any key to start`;
   document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
  },150)
    reset();
   }
}
function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
checkAns(userSeq.length-1);



}

let albtns=document.querySelectorAll(".btn");
for(btn of albtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
























