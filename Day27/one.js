let arr=[1,2,3,4,5,6,,8,3,4,5];
let num=2;
function getElement(arr,num){
 for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
    console.log(arr[i]);
    } 
 }
}
getElement(arr,num);