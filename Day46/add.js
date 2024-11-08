function save(data){
return new Promise((success,failure) => {
    let internetSpeed=Math.floor(Math.random() * 10)+1;
    if(internetSpeed > 4){
        success("Success: data was saved");
    }else{
        failure("weak connection");
    }
});
}