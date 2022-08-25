/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

let halfNumbers = [4, 44, 56, 38, 78, 98, 50];
let half = halfNumbers.map(half => half / 2 );
// console.log(half);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];

let firstLetter = friends.map(f => f[0]);
// console.log(firstLetter);
let lengthAll = friends.map(f => f.length);
// console.log(lengthAll);


// foreach only declare a function and never return any value.
// and never set a variable for console

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
// products.forEach(p => console.log(p))
products.forEach(product => console.log(product));
