const numbers = [12,2, 5, 23, 45, 11, 18, 9, 55, 61, 1, 50];
// let smallNum = numbers.filter(s => s < 10);
// console.log(smallNum);
// let bigNum = numbers.filter(b => b > 50);
// console.log(bigNum);
// let ten = numbers.filter(t => t % 10 === 0);
// console.log(ten)


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'tablet', price: 23000},
    {id: 1, name: 'watch', price: 35000},
];

// let product = products.filter(p => p.price < 40000)
// console.log(product);


// find in javascript 

let smallNumFind = numbers.find(s => s < 10);
// console.log(smallNumFind);

let productPrice = products.find(p => p.price < 40000);
// console.log(productPrice);