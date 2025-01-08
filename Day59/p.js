let number=170;
let originalNumber=number;
let reversedNumber=0;


while(number>0){
    let digit=number%10;
    reversedNumber=reversedNumber*10+digit;
    number=Math.floor(number/10);
}

if(originalNumber===reversedNumber){
    console.log("number is palindrome");
}else{
    console.log("number is not palindreome");
}