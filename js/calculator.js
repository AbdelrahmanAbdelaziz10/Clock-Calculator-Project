let input = document.querySelector("#cal");
let btn = document.querySelectorAll("button");

function Clear(){
    input.value="";
}
function Delete(){
    input.value=input.value.slice(0,-1);
}
function display(num){
    input.value+= num;
}
function calc(){
    try{
        input.value =eval(input.value);
    } catch(err){
        input.value="Error";
    }
}

