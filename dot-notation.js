const student = {
    name: 'Hulk',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}
let chemistryMark = student['marks']['chemistry'];

let chemistry = student.marks.chemistry;

console.log(chemistry)
console.log(chemistryMark);