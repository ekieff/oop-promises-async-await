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

function Roommate (name, income, routine){ //setting template for pulling information
    this.name = name;
    this.income = income;
    this.routine = routine;
    this.intro = function(){
        console.log("Hi, my name is " + this.name);
    }
}
let emma = new Roommate('Emma', true, 'morning bird');
console.log(emma);
let shanna = new Roommate('Shanna', false, 'night owl');
console.log(shanna);
let andrea = new Roommate('Andrea', true, 'morning bird');
console.log(andrea);
andrea.intro();
shanna.intro();
emma.intro();

//class
class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }
    drive (){
        console.log('Vroom');
    }
    intro(){
        console.log("This car is a " + this.make + ' ' + this.model);
    }
}
let tesla = new Car(2020, 'Tesla', 'Model Y', 'Red');
console.log(tesla);
tesla.drive();
tesla.intro();
class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro(){
        console.log(`My name is ${this.name} and my username is @${this.username}`);
    }
}

fetch('https://api.github.com/users/ekieff')
.then(response => {
    return response.json();
})
.then (function(jsonData){
    let githubURL = jsonData.url;
    let githubUsername = jsonData.login;
    let githubName = jsonData.name;

    let elaine = new GithubProfile(githubUsername, githubName, githubURL);
    console.log(elaine);

    elaine.intro();
        
})

fetch('https://api.github.com/users/romebell')
.then(response => {
    return response.json();
})
.then(jsonData =>{
    console.log(jsonData);
    const rome = new GithubProfile(jsonData.login, jsonData.name, jsonData.url);
    console.log(rome);
})
