h1=document.querySelector("h1");
h2=document.querySelector("h2");

function changeColor(color,delay,nextColorChange){
    setTimeout(() => {
        h1.style.color=color;
        if(nextColorChange) nextColorChange()
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("pink" ,1000,()=>{
        changeColor("orange",1000,()=>{
            changeColor("green",1000,()=>{
                changeColor("purple",1000);
            });
        });
    });
});


//callback nesting -> callback hell