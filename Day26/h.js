function multieGreet(func,n){
    for (let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("Shivani");
}

multieGreet(greet,90);