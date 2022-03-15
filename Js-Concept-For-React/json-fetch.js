// 1. JSON.stringify and JSON.Parse
const student = {
    name: 'fizz',
    StudentAge: 25,
    work: ['facebook', 'youtube', 'instagram']
}
//convert normal js to json
const studentJson = JSON.stringify(student);

console.log(student);
console.log(studentJson);

//convert json to normal js
const studentObj = JSON.parse(studentJson);
console.log(studentObj);

// 2. fetch
// fetch(`url`)
// .then(res => res.json())
// .then(data => console.log(data))

// 3.  kyes and value finding
const keys = Object.keys(student);
const values = Object.values(student);

// 4. loop 
const number = [12, 32, 423, 43, 61];
number.forEach(num=>console.log(num)); // return korte hoy na
number.map(num => num*2) // return korte hoy

// for loop-----------
//  object er shomoy of bebhar hoy: for(const student of students)
//  Array er shomoy on bebhar hoy: for(const number on numbers)

// 5. add or remove from an array
const products =[ 
    {name: 'mobile', brand: 'apple', price: 10000, color: 'gold'},
    {name: 'leptop', brand: 'walton', price: 90000, color: 'black'},
    {name: 'watch', brand: 'lenevo', price: 1000, color: 'white'},
    {name: 'Earphone', brand: 'mi', price: 2000, color: 'black'},
    {name: 'PC', brand: 'HP', price: 100000, color: 'silver'}
];
const newProduct ={name: 'camara', brand:'canon', price:12000, color:"dark"}

//copy products array and add newProduct
const newProducts=[...products, newProduct]
// console.log(newProducts);

// 6. remove specific item from array
const remaining = products.filter(product=>product.name !== 'leptop'); //leptop chara baki shob golo nicchi
console.log(remaining);
