let n=15;
let a=0,b=1;

console.log(a);
if(n>1)
    console.log(b);

for(let i=2;i<=n;i++){
    let temp=a+b;
    console.log(temp);
    a=b;
    b=temp;
}
    
