//! defining classes

class Person {
    name : string 
    age : number
    //? var janno constructor korta hoy
    constructor(){
        this.name = "";
        this.age = 0 ;
    }
    //? function create
    great(){
        //? this -> class ar moda var tai 
        console.log(`hello, ${this.name}, age : ${this.age}`);
    }
}
//? class call 
const user = new Person();
//? class ar var define
user.name = "jihad" ;
user.age = 21 ;
//? class ar function call
user.great()


class Student{
    name: string 
    age : number 
    //? dynamic value function
    constructor(name: string , age : number){
        this.name = name 
        this.age = age 
    }
    dataResult (){
        console.log(`My data name: ${this.name} , my age : ${this.age}`);
    }
}
//? class call
const student = new Student("Jihad",21)
//? class ar moda function call
student.dataResult()


    //! modifiers property 
//? public , private , protected

//* public -> access from anywhere
//* private -> only class 
//* protected -> only class and subclasses


class BankAccount {
    //* public -> access from anywhere
    public accountName : string ;
    //* private -> only class 
    private balance : number ;
    //* protected -> only class and subclasses
    protected accountType : string 

    constructor(name : string , balance : number){
        this.accountName = name 
        this.balance = balance 
        this.accountType = "Savings"
    }
    //* create function
    public showBalance(){
         console.log(`My Balance is : ${this.balance}`);
    }
}

const bankAccount = new BankAccount("tahin", 2000)
bankAccount.showBalance()


  //!  inheritance class 

  class Animal{
     move(){
        console.log("Loading move function..");
     }
  }

  //* extends -> extends deya anno class ka aksatay kola
  //? Dog hola Animal ar child class
  //* Dog -> child class
  class Dog extends Animal{
    bark(){
        console.log("bark function loading..");
    }
  }
  //* class call 
  const myBog = new Dog()
  //* animal class function call
  myBog.move();
  myBog.bark()


      //!  implements keyword
  interface Drive{
    start:()=> void ;
    stop:()=> void ;
  }    

  //? implements -> interface and class connection kola
  class Car implements Drive{
    start(){
        console.log('Car is started..');
    }
    stop(){
        console.log('Car is stop');
    }
  }
  const newCar = new Car()
  newCar.start();
  newCar.stop()