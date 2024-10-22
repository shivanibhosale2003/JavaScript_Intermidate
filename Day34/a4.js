const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];
doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
doubleAndReturnArgs([2],10,4);//[2,20,8]