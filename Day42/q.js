let btn=document.querySelector("button");

function changeColor(){
    console.log(this);
    this.style.backgroundColor="green";
}
btn.addEventListener("click",changeColor);