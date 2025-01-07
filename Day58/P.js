var n=prompt("Enter Number");
if(n==1){
    console.log("1 is not prime neither composite");
}else{
    if(n<0){
        console.log("negative number is not prime number");
    }else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                console.log("number is not prime");
                
            }else{
                    console.log("number is prime");
                    
                }
        }
    }
}

