let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    console.dir(form);

    let user=this.elements[0];
    let pass=this.elements[1];

    console.log(user.value);
    console.log(pass.value);
    
    
})