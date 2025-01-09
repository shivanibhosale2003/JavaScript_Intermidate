let number=prompt("Enter Number");
if(number==1){
    console.log("1 is not prime neither composite");
}else if(number<2){
    console.log("this number is not prime");
}else{
    let isPrime=true;

    for(let i=2;i<number;i++){
        if(number%i==0){
             isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log("number is prime");
        
    }else{
        console.log("number is  not prime");
    }
       
        
    }