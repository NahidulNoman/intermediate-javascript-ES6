// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
//numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

// let odd = [ 1, 3, 5, 7, 9 ];
// let getOdd = []
// for(let i = 0; i <odd.length; i++){
//     let index = odd[i] + 1;
//     getOdd.push(index)
// }
// console.log(getOdd);

// let totalOdd = odd.map(a => a + 1);
// console.log(totalOdd);

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

// let division = [33, 50, 79, 78, 90, 101, 30 ];
// let divisible = division.filter(d => d % 10 === 0);
// console.log(divisible);

// let divisible = division.find(x => x % 10 === 0);
// console.log(divisible);

// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

// let arr = [ 1, 9, 17, 22 ];
// let get = 0;
// for(let i = 0; i<arr.length; i++){
//     let index = arr[i];
//     get += index
// }
// console.log(get);

// let arr2 = arr.reduce((sum,current) => {
//     return sum + current;
// },0)
// console.log(arr2);

// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?
// 20 + 15 + 22 = 57 . The output will be 57;

// const people =[
//     {name : 'Dina', age : 20},
//     {name : 'Tina', age : 15},
//     {name : 'Kina', age : 22}
// ]
// let get = 0;
// for(let i = 0; i < people.length; i ++){
//     let index = people[i];
//     console.log(i);
// }
// let getAge = people.reduce((sum,current) => {
    
// },0);
// console.log(getAge);

// const student ={
//     name : 'Friday',
//     age : 22
// }
// console.log(student.age);

// let data = {
//     location :[
//         {
//             latitude : '32.2,37.6',
//             longitude : '98.77,58.7',
//             city : 'Hyderabad',
//             country : 'India'
//         }
//     ]
// };
// console.log(data.location[0].city);


let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
  console.log(user.email);
  console.log(user.address);
  console.log(user.address.city);
  console.log(user.address.geo.lat);
  console.log(user.company.name)