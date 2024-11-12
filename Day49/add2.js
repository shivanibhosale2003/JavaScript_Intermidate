async function greet(){
    
    return "Hello!";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result);  
})
.catch((err)=>{
    console.log("promise with rejected with error:",err);
    
});


let demo= async() => {
    return 5;
};