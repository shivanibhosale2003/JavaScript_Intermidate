let p=document.querySelector("p");
p.addEventListener("click",function(){
console.log("para was clicked");
});


let box=document.querySelector(".box");
box.onmouseenter=function () {
   console.log("box was clicked");
};