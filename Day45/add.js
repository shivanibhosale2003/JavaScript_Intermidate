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
},()=>{
    console.log("Failure:weak connection");
    
});