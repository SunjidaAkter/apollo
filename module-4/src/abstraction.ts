//abstraction 2 vabe kora jai
//interface die r abstract class die
//interface
interface Ivehicle {
  name: string;
  model: string;
}
interface Ivehicle1 {
  startEngine(): void;
  move(): void;
  move(): void;
}
const vehicle: Ivehicle = {
  name: "Car",
  model: "200",
};
class Vehicle3 implements Ivehicle1 {
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
