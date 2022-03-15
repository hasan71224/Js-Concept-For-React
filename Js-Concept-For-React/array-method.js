const products =[ 
    {name: 'mobile', brand: 'apple', price: 10000, color: 'gold'},
    {name: 'leptop', brand: 'walton', price: 90000, color: 'black'},
    {name: 'watch', brand: 'lenevo', price: 1000, color: 'white'},
    {name: 'Earphone', brand: 'mi', price: 2000, color: 'black'},
    {name: 'PC', brand: 'HP', price: 100000, color: 'silver'}
]
// 1. map ------ map a return korte hoy tai left a veriable dite hoy.
const brands = products.map(product => product.brand);
console.log(brands);
const price = products.map(product => product.price);
console.log(price);

// 2. forEach -------forEach a return kora lage na tai veriable lage na.
products.forEach(product=> console.log(product))
products.forEach(product=> console.log(product.color))

products.forEach(product => {

})

// 3. filter (match howa all array dibe)
const cheap = products.filter(product => product.price<5000); // direct filter
console.log(cheap);

const specificName = products.filter(product=> product.name.includes("e")); // filter specific includes words
console.log(specificName);

// 4. finds (first jei object ta pabe oita show korbe.)
const special = products.find(product=>product.name.includes("e")); // find 
console.log(special);
