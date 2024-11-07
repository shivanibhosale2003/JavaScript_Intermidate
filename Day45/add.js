function save(data,success,failure){
    let internetSpeed=Math.floor(Math.random() * 10) +1;
    if(internetSpeed >4){
        success();
    }else{
        failure();
    }
}

save("Shivani Bhosale",()=>{
    console.log("Success:your data was save");
    save("hello world",()=>{
        console.log("success2: data2 saved");
        save("xyz",()=>{
            console.log("success3: data3 saved");
            
        },()=>{
            console.log("failure3: weak connection");
            
        })
        
    },()=>{
        console.log("failure2:weak connection");
        
    })
},()=>{
    console.log("Failure:weak connection");
    
});