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
})
.catch(()=>{
    console.log("promise rejected");
});