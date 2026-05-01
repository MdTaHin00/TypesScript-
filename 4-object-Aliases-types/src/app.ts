
//! object types 

const students = {
    name: "Alice",
    age: 23
}
function printUser(user: { name: string, age: number }): void {
    console.log(`${user.name} is ${user.age} years old`);
}
printUser(students)


//! type alias
type User = {
    name: string,
    //* ? -> optional age thakata para na o thakata para
    age?: number
}


function showUser(user: User) {
    console.log(user.name);
}
const user1 = {
    name: "bob",
    age: 24
}
showUser(user1)


// product type
type Product = {
    id: number,
    name: string,
    price: number,
    //* ? -> description optional na thakay error asva na
    description?: string
}
const product = {
    id: 1,
    name: "phone",
    price: 29,
}
function productData(product: Product) {
    console.log(product.id, product.name, product.price);
}
productData(product)