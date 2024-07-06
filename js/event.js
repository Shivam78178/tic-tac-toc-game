let btn=document.querySelector("#btn");
btn.addEventListener("click",() => {
console.log("Clicked");
});

let btn2=document.querySelector("#btn2");
btn2.addEventListener("dblclick",()=>{
 console.log("Click 2 times");
});

let plus=document.querySelector("#plus");
let a=1;
plus.addEventListener('click',()=>{
  console.log("plus",a);
  a++;
});

let minus=document.querySelector("#minus");
minus.addEventListener('click',()=>{
    if(a>=1){
  console.log("minus",a);
  a--;}
  else{
    console.log("Value is 0")
  }
});

let mode=document.querySelector("#mode");
let currmode="light";
mode.addEventListener('click',()=>{
    let body=document.querySelector("body");
if(currmode==="light"){
    currmode="dark";
    console.log(currmode);
    body.style.background="black";
    body.style.color="white";
}else{
    currmode="light";
    console.log(currmode);
    body.style.background="white";
    body.style.color="black";
}
});

let img1=document.querySelector("#image");
    img1.addEventListener('click',()=>{
      console.log("Click img");
    });
