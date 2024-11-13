 async function greet(){
    throw "weak connection";
    return "SHIVANI";
}


greet()
.then((result)=>{
    console.log("promise resolved");
    console.log("result was:",result);
})
.catch((error)=>{
    console.log("promise rejected:",error);
});

