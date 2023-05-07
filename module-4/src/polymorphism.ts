//je class different different output dei setai polymorphism
//same method but different child class r different instance use kore different output paisi... etai polymorphism
//ekhetre parents class gular kintu constructor nai
class Person1 {
  //class k type hisebe lakha jai r instance gular type o hochhe tar class
  takeNap() {
    console.log("I am sleeping 8 hours per day");
  }
}
class Student1 extends Person1 {
  takeNap(): void {
    console.log("I am sleeping 10 hours per day");
  }
}
class Developer extends Person1 {
  takeNap(): void {
    console.log("I am sleeping 5 hours per day");
  }
}
function getNap(param: Person1) {
  param.takeNap();
}
const person2 = new Person1();
const person3 = new Student1();
const person4 = new Developer();
getNap(person2);
getNap(person3);
getNap(person4);

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}
function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}
getAreaOfShape(new Circle(5));
getAreaOfShape(new Rectangle(5, 5));
