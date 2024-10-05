function sum(a,b){
    console.log(a+b); 
}
sum(100,1);


function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("shivani",21);

function calcAvg(a,b,c){
    console.log((a+b+c)/3);
}
calcAvg(1,2,3);

//table

function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
        
    }

}
printTable(3);