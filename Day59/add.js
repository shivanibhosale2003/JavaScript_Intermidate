function isPrime(num){
    if(isPrime<=1){
        return false;
    }else{
        for(let i=2;i<num;i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(4));
console.log(isPrime(11));
