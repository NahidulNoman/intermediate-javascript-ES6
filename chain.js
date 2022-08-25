let company = [
    {
        Brand : 'Xaiomi note 8',
        place : {
            place1 : 'China',
            place2 : 'Bangladesh',
            other : {
                name : 'Yes its Noman!!'
            }
        }
    }
]
let getCompany = company[0].place.other.name
// console.log(getCompany)


let chain = [
    'crazy','men',
];
// console.log(chain[1]);


const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 
let getUser = user.address.street.second
console.log(getUser)