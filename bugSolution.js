function foo(a, b) {
  return a + b; //this line will cause unexpected concatenation
}

function bar(a, b) {
  return parseInt(a) + parseInt(b);
}

function betterFoo(a, b) {
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)){
    return 0; // Handle cases where conversion fails
  }
  return a + b; 
}
console.log(foo(1, "2")); // Output: 12
console.log(bar(1, "2")); // Output: 3
console.log(betterFoo(1, "2")); //Output: 3
console.log(betterFoo("a", 2)); //Output: 0