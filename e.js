class Animal60 {
  speak() { return "Animal sound"; }
}
class Dog60 extends Animal60 {
  speak() { return "Dog barks"; }
}
class Cat60 extends Animal60 {
  speak() { return "Cat meows"; }
}
const animals60 = [new Dog60(), new Cat60()];