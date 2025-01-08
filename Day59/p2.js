let number=1710;
let originalNumber=String(number);
let reversedNumber=originalNumber.split("").reverse().join("");

if(originalNumber === reversedNumber){
    console.log("number is prime");
}else{
    console.log("number is not prime");
}