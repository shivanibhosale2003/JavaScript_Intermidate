async function demo() {
    try{
        await changeColor("red",1000);
        await changeColor("pink",1000);
        await changeColor("black",1000);
        await changeColor("blue",1000);
        await changeColor("purple",1000);
        await changeColor("violet",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
}
let a=5;
console.log(a);
console.log("new number=",a+3);

