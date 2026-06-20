let students=["jhon","duster","santhosh","praveen","vishnu"];
console.log(students);
students.unshift("suresh");   // add the array from first one
console.log(students);
students.push("ramesh");  // add the array from last one
console.log(students);

students.shift();   // remove the array form firstone
console.log(students);
students.pop();    // remove the array from last one
console.log(students);

console.log(students.length); //length of the array

console.log(students.slice(1,3)); //slice the array from 1 to 3

students.splice(1,2); //splice the array from 1 to 2
console.log(students);

let nameString=students.join(","); //join the array with comma
console.log(nameString);

students.forEach(val=>{
    console.log(val);
})

var result=students.reduce((acc,val)=>{
    return acc+"_"+val;
});
console.log(result);


