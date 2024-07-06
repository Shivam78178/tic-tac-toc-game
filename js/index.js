let heading =document.querySelector("#head");
console.log(heading);
let divs=document.querySelectorAll("div");
console.log(divs);
console.log(divs[0].innerText='first div')
console.log(divs[1].innerText='Second div')
console.log(divs[2].innerText='Third div')
let id=1;
for(div of divs){
    div.innerText=`new unique value ${id}`;
    
    id++;
}
let h2=document.querySelector("h2");
console.log(h2.innerText);
h2.innerText=(h2.innerText+" this use for web development.");

let div2 = document.querySelector('div');
console.log(div2);
let value=div2.getAttribute("class");
console.log(value);
console.log(div2.setAttribute('class', 'div-box'));
