function sum(x,y){
    return x+y;
}
console.log(sum(1,2));


function isAdult(age){
    if(age>=18){
        return "Adult";
    }else {
        return "Not adult";
    }
}
console.log(isAdult(45));

function addSum(n){
    let cal=0;
    for(let i=1;i<=n;i++){
        cal+=i;
    }
    return cal;
}

