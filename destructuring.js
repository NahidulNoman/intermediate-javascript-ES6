const fish = {
    name: 'King Hilsa', 
    address: 'Chandpur',
    color: 'silver',
    phone : '017176588899',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;
const {address} = fish;
// console.log(address);

// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);

// if you want to get value from object you must need the same property name as a declare variable.

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'}
// console.log(age);


// array destructuring

const [first, another] = [44, 99, 88, 456];
// console.log(first, another);

const names = ['hel', 'tom', 'jack'];
const [nam1, nam2, nam3] = names;
// console.log(nam3);

function getNames(){
    return ['Goo', 'Gle'];
}

const [go, goes] = getNames();
console.log(go, goes);