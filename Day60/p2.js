function checkPrime(num){
    if(num==1){
        return false;
    }else if(num<1){
        return false;
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}
console.log(checkPrime(4));