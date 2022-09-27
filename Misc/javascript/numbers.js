let primes = [2, 3, 5, 7];

for(const value of primes) {

}

let sandwich = {
    grilled: true
    butter: "lots"
    bread: "whole wheat"
    calories: 250
}

for(const value of sandwich) {
    console.log(value)
  }
  // Error: Objects are not iterable
  
  for(const key in sandwich) {
    console.log(key)
  }
  // "grilled"
  // "butter"
  // "bread"
  // "calories"