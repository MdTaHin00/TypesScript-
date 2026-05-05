//! project vehicle management system


//? step-1 create an interface
interface Vehicle {
    brand: string ,
    speed: number,
    move(): void 
}
//? step-2 create a parent class
  //* implements -> interface ka class connection kola
class Car implements Vehicle{
    //* protected -> sodo subClass a use kola jay
    protected year:number = 2025 ;

    //* interface use kolar janno constructor
    constructor(public brand: string ,public speed : number){}

    move(){
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h`);
    }
}
//? step-3 create a child class
 //* Car class ka ai class sata jok korce
class ElectricCar extends Car{
    change(){
        console.log(`${this.brand} - ${this.year} is changing..`);
    }
}
//? step-4 create an object instance
const tesla = new ElectricCar("Teals model 2",100)
tesla.move();
tesla.change()