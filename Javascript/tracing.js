
function ba(){
    b();
}
function b(){
    console.trace("tarce:");
}

function add(a,b){
console.log("tarce:");
ba();
return a+b;
}
console.log(add(1,3));
console.log(add(5,3));
console.log(add(8,3));
console.log(add(9,3));
console.log(add(1,3));