class Animal{
    constructor(name,sound) {
    this.sound=sound;
    this.name=name;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Dog extends Animal{
    fetch(){
        console.log("Fetching the ball!");
}
}
const animal = new Animal("Lion", "Roar");


animal.makeSound(); // Output: "Roar"





const dog = new Dog("Buddy", "Woof");


dog.makeSound(); // Output: "Woof"


dog.fetch(); // Output: "Fetching the ball!"