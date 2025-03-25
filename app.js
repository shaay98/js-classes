"use strict"

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person1("Alexis", 20);

person1.greet();

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
  }
}
const person2 = new Person2("Alice", 30);
person2.greet(); 
