//function scope
function calSum(x,y){
    let sum=x+y;
    console.log(sum);
}
calSum(10,100);

//block scope

{
    let a=1;
    console.log(a);
}

for(let i=1;i<=10;i++){
    console.log(i);
}

//lexical scope

function outerFun(){
    let x=10;
    let y=20;
    function innerFun(){
        console.log(x);
        console.log(y);  
    }
    innerFun();
}








