//Abstraction is a fundamental concept in object-oriented programming (OOP) that allows you to model complex systems in a more manageable and modular way.
//abstraction 2 vabe kora jai
//interface die r abstract class die
//interface
interface Ivehicle {
  name: string;
  model: string;
}
const vehicle: Ivehicle = {
  name: "Car",
  model: "200",
};
interface Ivehicle1 {
  startEngine(): void;
  move(): void;
  move(): void;
}
class Vehicle3 implements Ivehicle1 {
  //IVehicle holo Vehicle3 class er type...class er type prokash korte ekhane : na use kore implements use korte hoi
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log("I am starting engine");
  }
  stopEngine(): void {
    console.log("I am stopping engine");
  }
  move(): void {
    console.log("I am moving engine");
  }
  test() {
    console.log("testing");
  }
}
const vehicle4 = new Vehicle3("hi", "hallo", 0);

//abstract class
abstract class VehicleClass {
  //ei class k ectends korte parbe but etar instance banano jabe na
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void; //abstract thakle implementation kora lage na ... etake follow kora chhara er ar kono kaj nei
  abstract stopEngine(): void; //abstract thakle implementation kora lage na ... etake follow kora chhara er ar kono kaj nei
  abstract move(): void; //abstract thakle implementation kora lage na ... etake follow kora chhara er ar kono kaj nei
}

class Car extends VehicleClass {
  startEngine(): void {
    console.log("I am starting engine...");
  }
  stopEngine(): void {
    console.log("I am stopping engine...");
  }
  move(): void {
    console.log("I am moving...");
  }
}

const Car1 = new Car("car", "honda", 55);
Car1.startEngine();
