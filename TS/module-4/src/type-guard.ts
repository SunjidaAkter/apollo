//type script e j type k badha diba otai holo type guard
//keyof guard
type AlphaNeumeric = string | number;
function add(param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric {
  if (typeof param1 == "number" && typeof param2 == "number") {
    //if die check kore etar type thik kore dea hoitese ... etai type guard
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString(); //param der to type fix nai... string othoba number .. to toString() function ta die etar type fix kore dise r ki
  }
}
const a: string = "a";
console.log(a);
console.log(add(1, 2));
console.log(add("1", "2"));

//in guard
type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};
function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return `I am an ${user.role} user`;
  } else {
    return `I am a normal user`;
  }
}
const normalUser: NormalUserType = { name: "sun" };
const adminUser: AdminUserType = { name: "sun", role: "admin" };
console.log(getUser(normalUser));
console.log(getUser(adminUser));

//instance of guard
class Animal1 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I m making sound");
  }
}

class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBarking() {
    console.log("I am barking");
  }
}
class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makemeowing() {
    console.log("I am meowing");
  }
}
function isDog(animal: Animal1): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal1): animal is Cat {
  return animal instanceof Cat;
}
function getAnimal(obj: Animal1) {
  if (isDog(obj)) {
    obj.makeBarking();
  } else if (isCat(obj)) {
    obj.makemeowing();
  } else {
    obj.makeSound();
  }
}
const animal2 = new Dog("kuku", "dog"); //this is a instance of dog
const animal3 = new Cat("mao", "cat"); //this is a instance of cat
getAnimal(animal3);
