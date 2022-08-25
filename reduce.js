// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters 

let numbers = [1,2,3,4,5,6,7,8,9];
let total = numbers.reduce((sum,number) => {
    return sum + number;
},0);
console.log(total);