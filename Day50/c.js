h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`color changed to ${color}!`);
             resolve("color cganged!");            
        },delay);
    });
}

async function demo(){
  await  changeColor("red",1000);
  await changeColor("pink",1000);
   await changeColor("purple",1000);
   await changeColor("orange",1000);
   await changeColor("blue",1000);
}