class Animal {
  //   name: string;//ts er khetre egula deae lage na
  //   species: string;//ts er khetre egula deae lage na
  //   sound: string;//ts er khetre egula deae lage na
  //parameter properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;//ts er khetre egula deae lage na
    // this.species = species;//ts er khetre egula deae lage na
    // this.sound = sound;//ts er khetre egula deae lage na
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
const dog = new Animal("kuku", "dog", "ghew ghew");
const cat = new Animal("meow", "cat", "meow meow");
dog.makeSound();
cat.makeSound();
