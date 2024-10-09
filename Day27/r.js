function oddOrEven(request){
    if(request=="odd"){
        return function(n){
            console.log(1(n%2==0));
        }else if(request=="even"){
            return function(n){
                console.log(!(n%2==0));
               }else {
                console.log("Wrong Request!");
            }
        }
    }
}