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
    .then((result)=>{
        console.log("promise resolved");
        console.log("result of promise:",result);
        
        return save("abcd");
    })
    .then((result)=>{
        console.log("promise2");
        console.log("result of promise:",result);
        return save("xyz");
    })
    .then((result)=>{
        console.log("promise3");
        console.log("result of promise:",result);
    })
    .catch((error)=>{
        console.log("promise rejected");
        console.log("error of promise:",result);
    });