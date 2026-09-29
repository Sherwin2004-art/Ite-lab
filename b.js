// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating.");
    }

    sleep() {
        console.log(this.name + " is sleeping.");
    }
}

// Child class inherits from Animal
class Dog extends Animal {
    bark() {
        console.log(this.name + " is barking.");
    }

    run() {
        console.log(this.name + " is running.");
    }
}

// Create an object
const myDog = new Dog("Buddy");

// Call the 4 methods
myDog.eat();
myDog.sleep();
myDog.bark();
myDog.run();
