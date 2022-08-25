// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

let multiply = (num1,num2,num3) => {
    let multi = num1 * num2 * num3;
    return multi;
}
let result = multiply(2,2,2);
// console.log(result);

// 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

let usingMultiLine = `
I am a web developer.
I love to code.
I love to eat biryani.
`
// console.log(usingMultiLine);

// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

let defaultReturn = (num1,num2 = 2) => {
    let sum = num1 + num2;
    return sum;
}
let getResult = defaultReturn(10);
// console.log(getResult);

// Write an arrow function where it will do the following:
//a) It will take an array where the array elements will be the
//name of your friends
//b) Check if the length of each element is even, push elements
//with even length to a new array and return the result


let friend = (myFriend) => {
    let newFnd = [];
    for(let fnd of myFriend){
        if(fnd.length % 2 === 0){
            newFnd.push(fnd);
        }
    }
    return newFnd;
}
let myFriends = ['tom','jack','ertugul','solaiman'];
// console.log(friend(myFriends))

// Write an arrow function where it will do the following:
//a) Square each array element
//b) Calculate the sum of the squared elements
//c) Return the average of the sum of the squared elements

let square = sqr => {
    let squareNumber = [];
    let sum = 0;
    for(let s of sqr){
       let doubleIt = Math.pow(s,2);
        squareNumber.push(doubleIt);
        sum = sum + doubleIt;
        average = sum / squareNumber.length
    }
    return squareNumber,sum;
    
}
let squareArr = [2,4,6,8,10,12];
// console.log(square(squareArr));

// Write an arrow function where it will do the following:
//a) It will take two array inputs
//b) Combine the two arrays and assign them in a new array
//c) Find the maximum number from the new array and return the result

let twoArrInput = (mix1,mix2) => {
    let combineArr = [];
    for(let mix1Arr of mix1){
        combineArr.push(mix1Arr)
    }
    for(let mix2Arr of mix2){
        combineArr.push(mix2Arr)
    }
    let maxNumber = Math.max(...combineArr);
    return maxNumber;
}
let firstArr = [2,4,6,8];
let lastArr = [10,12,14,16,45];
console.log(twoArrInput(firstArr,lastArr));