//cahnge event
let form=document.querySelector("form");

form.addEventListener("submit",function(event){
event.preventDefault();
});

let user=document.querySelector("#user");

user.addEventListener("change",function(){
console.log("change event");
console.log("change value= ",user.value);

});

//let pass=document.querySelector("#pass");

//user.addEventListener("change",function(){
//console.log("pass changed");
//console.log("change pass= ", pass.value);
//});

//input event

user.addEventListener("input",function(){
    console.log("input event");
    console.log("change value= ",user.value);

});
