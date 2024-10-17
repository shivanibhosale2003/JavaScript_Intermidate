let num=[1,2,3,4];

let double=num.map(function (el){
    return el*el;
});


//Filter

let nums=[1,2,3,4,5,6,8,10,12,14];

let even=nums.filter((num)=>(num%2==0));

let nums2=[22,23,25,26,27,29,33];
let odd=nums2.filter((nums2)=>(nums2%2!=0));