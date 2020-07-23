// Object Oriented Programming
//Prototypical Inheritance
const dog = {
    name: "Michael",
    goodBoy: true,
    gender: 'girl'
};

const dogTwo = { //want to relate some characteristics in dog to dogTwo
    name: "Rocco"
};
dogTwo.__proto__ = dog; //logs all of the key value pairs into the other dog will overwrite already existing values.
console.log(dogTwo);
console.log(dog);
console.log(dogTwo.goodBoy);

//Make two objects and one object to inherit

const mia = {
    type: "herder",
    sleepSound: "snore",
    play: "tugowar"
}
const pierre = {
    type: "toy",


}
pierre.__proto__ = mia;
console.log(pierre);
console.log(mia);

//constructor functions
function User(name){ //constructor function needs to be capitalized
    this.name = name;  //creates a template

}
let adam = new User('Adam'); //when initiating a constructor function
console.log(adam.name);

function Roommate (name, income, routine){
    this.name = name;
    this.income = income;
    this.routine = routine;
}
let emma = new Roommate('Emma', true, 'morning bird');
console.log(emma);
let shanna = new Roommate('Shanna', false, 'night owl');
console.log(shanna);
let andrea = new Roommate('Andrea', true, 'morning bird');
console.log(andrea);