var number=prompt("Enter Number");
if(number==1){
    console.log(`${number} is not prime neither composite`);
}else if(number<1){
    console.log(`${number} is not possible for prime`);
}else{
    for(let i=2;i<number;i++){
        if(number%i==0){
           var result=`${number} is not prime number`;
        }else{
            var result=`${number} is prime `;
            
        } 
           }
           console.log(result);        
    }
