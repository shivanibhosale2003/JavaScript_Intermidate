let n=prompt("Enter Number");
if(n==1){
    console.log("1 in not prime neither composite");
    
}else if(n<1){
    console.log("negative number is not prime number");
}else{
   let isPrime=true;


    for(let i=2;i<n;i++){
        if(n%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log("number is prime");
        
    }else{
        console.log("number is not prime");
        
    }
}