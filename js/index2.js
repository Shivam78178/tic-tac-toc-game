// let newbtn=document.createElement('button');
// newbtn.innerText="click me!";
// console.log(newbtn);
// let div=document.querySelector("div");
// div.append(newbtn); // insert element in select element in last
// div.before(newbtn); // insert element in before the select element.
// div.after(newbtn); // insert element in after the select element.
// div.prepend(newbtn); // insert element in select element in top.
// div.remove(newbtn); // delete select element.

let newbtn=document.createElement("Button");
newbtn.innerText='click me!';
newbtn.style.background="red";
newbtn.style.color="white";
let body=document.querySelector("body");
body.prepend(newbtn);


let para=document.querySelector("p");
console.log(para);
