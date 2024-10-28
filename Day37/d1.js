let btns=document.querySelectorAll('button');



for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter = function(){
console.log("button in an action");

    };
}

function sayHello(){
    alert("Hello!");
    console.log("button was clicked");
};