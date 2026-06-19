// Bistwise opeartors

let a =4;
let b =6;
let c =a<<1;   // 0 0 0 0 0 1 0 0 --> 128 64 32 16 8 4 2 1
let d =a>>2;  // 0 0 0 0 0 1 1 0 --> 0 0 0 0  0 0 1 1 -> 0 0 0 0 0 0 0 1

console.log(c);
console.log(d);

let ab = 5;
let bc = 6;
 console.log(ab > bc ? "Smaller":"Greater");  //ternary Operator