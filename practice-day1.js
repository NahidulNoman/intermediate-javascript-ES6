//১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

// let => let it to reassign
// let fullName = 'Khan';
// fullName = 'Hasa'
// console.log(fullName);

// const => reassign is not allowed
// const number = 9;
// number = 5;
// console.log(number);

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

// let web = 'Course Form Development'
// let course = `This is a String!! 
// and ${web}
// `;
// console.log(course);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

// const division = number => number / 5;
// let num = division(50);
// console.log(num);

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

// let sum = (num1,num2) => {
//     let sum1 = num1 + 2;
//     let sum2 = num2 + 2;
//     let multiply = sum1 * sum2;
//     return multiply;
// }
// let number = sum(5,5);
// console.log(number);

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

// let multiply = (a,b,c) => {
//     return a * b *c;
// }
// let number = multiply(2,3,4);
// console.log(number);

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// let sumMultify = (num1,num2) => {
//     let sum1 = num1 + 2;
//     let sum2 = num2 + 2;
//     let multi = sum1 * sum2;
//     return multi;
// }
// let numbers = sumMultify(3,5);
// console.log(numbers);

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

// let arr = [12,32,11,9,56,10];
// let multiply = arr.map(five => five * 5);
// console.log(multiply);

// ৬.অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

// let arr = [12,32,11,9,56,10,1];
// let odd = arr.filter(odd => odd % 2 === 1);
// console.log(odd);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// let arrObj = [
//     {brand : 'xiaomi',price : 8000},
//     {brand : 'xiaomi',price : 9000},
//     {brand : 'xiaomi',price : 12000},
//     {brand : 'xiaomi note 8',price : 5000},
//     {brand : 'xiaomi',price : 7000}
// ]
// let newPrice = arrObj.find(p => p.price === 5000);
// console.log(newPrice);

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

// const computer ={
//     name : 'Hp Computer',
//     cpu : '2Haz',
//     price : 25000,
//     color : 'black'
// }
// let {color}= computer;
// console.log(color);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

// let arr = [20,55,61,73,35];
// let three = [];
// let [a,b,c] = arr;
// three.push(c);
// console.log(three);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

// function sum(num1,num2,num3 = 7){
//     return num1 + num2 + num3;
// }
// console.log(sum(5,5));

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো

