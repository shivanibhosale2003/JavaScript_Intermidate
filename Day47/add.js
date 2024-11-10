const p=Promise.resolve([1,2,3,4]);
p.then((v)=>{
    console.log(v[3]);
});