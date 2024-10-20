let arr=[1,2,3,4,5,9,8,8];

let result=arr.reduce((max,el)=>{
if(max < el){
    return el;
}else {
    return max;
}
});
console.log(result);
