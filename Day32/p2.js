//let nums=[1,2,3,4,5];

function getMin(nums){
    let min=nums.reduce((min,el) => {
        if(min < el){
            return min;
        }else{
            return el;
        }
    });
    return min;
    
}

let nums=[1,2,3,4,5,67,80]