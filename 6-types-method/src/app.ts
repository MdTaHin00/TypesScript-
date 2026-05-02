

//! union type ( | )

 //* value ar data string / number ani hota para
 let value : string | number

type Product = string | number

function getProduct(id: Product){
    console.log(`Fetching product ID: ${id}` );
}
getProduct("adc123");
getProduct(1234);

//! intersection types ( & )
type User ={
    id:string,
    name:string
}
type Admin ={
    isAdmin : boolean
}

type AdminUser = User & Admin

const admin : AdminUser={
    id:'user1',
    name:'jihad',
    isAdmin:true
}
console.log(admin);


//? typrof -> data ki type ta check kola
function log(value : string | number){
    if(typeof value === 'string'){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(3));
    }
}
log('hi, i am jihad hossain')
log(55657)


//! in operator type Guard
type Car = {
    drive:() => void
}
type Boat ={
    sail:() => void
}
function move(vehicle: Car | Boat){
    //* in -> vehicle ar moda 'drive' function aca ki na check
    if('drive' in vehicle){
        vehicle.drive()
    }else{
        vehicle.sail()
    }
}
const car:Car ={
    drive() {
        console.log('Car is driving');
    },
}
move(car)


//! instanceof type guard
class Dog{
    bark(){
        console.log('Woof woof');
    }
}
class Cat{
    meow(){
        console.log("Meow Meow");
    }
}
function makeSound(animal: Dog | Cat){
    //* instanceof -> animal moda Dog class aca ki na check
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.meow()
    }
}
const dog = new Dog();
const cat = new Cat()
makeSound(dog)
makeSound(cat)


//!  custom type guard

type Fish ={
    swim:() => void
}
type Bird={
    fly:() => void
}

function isFish(pet:Fish | Bird) : pet is Fish{
    return (pet as Fish).swim !== undefined
}

function moveIng(pet : Fish | Bird) {
    if(isFish(pet)){
        pet.swim()
    }else{
        pet.fly()
    }
}

const myFish : Fish ={
    swim:()=> console.log("My fish is swimming")
}
moveIng(myFish)
    