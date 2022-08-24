// function declaration 
/* function add(first, second){
    const total =  first + second;
    return total;
} */

const number = 56;

// function expression 
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}


function add4(first, second){
    return first + second;
}

const add5 = function(first, second){
    return first + second;
}

// arrow function
const add6 = (first, second) => first + second;

const result1 = add6(10, 20);
console.log(result1);

// interview question: differences between 
// function declaration, function expression and arrow function


// more arrow function 

// 3 way to declare arrow function 

const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
// console.log(result)

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// 1
// no parameter arrow function
const getPie = () => 3.14;

//2
// one parameter
const doubleIt = (num) => num * 2;

// 2.5
// one parameter simple version
const fiveTimes = num => num * 5;

//3 ! important
// multi line arrow function
// if you want to return something, use the return 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}