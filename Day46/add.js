function save(data){
return new Promise((resolve,reject) => {
    let internetSpeed=Math.floor(Math.random() * 10)+1;
    if(internetSpeed > 4){
        resolve("Success: data was saved");
    }else{
        reject("weak connection");
    }
});
}

save("apna college")
.then(()=>{
    console.log("promise resolved");
    return save("abcd");
})
.then(()=>{
    console.log("promise2");
    return save("xyz");
})
.then(()=>{
    console.log("promise3");
})
.catch(()=>{
    console.log("promise rejected");
});