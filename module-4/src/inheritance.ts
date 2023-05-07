class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  //   name: string;//parents type extends korai eguli r lagbe na
  //   age: number;//parents type extends korai eguli r lagbe na
  //   address: string;//parents type extends korai eguli r lagbe na
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
    // this.name = name;//parents type extends korai eguli r lagbe na
    // this.age = age;//parents type extends korai eguli r lagbe na
    // this.address = address;//parents type extends korai eguli r lagbe na
  }
  //   makeSleep(hours:number):string{
  //     return `This ${this.name} will sleep for ${hours}`//parents type extends korai eguli r lagbe na
  //   }
}
const student1 = new Student("sun", 34, "dhaka");
class Teacher extends Parent {
  // name:string//parents type extends korai eguli r lagbe na
  // age:number
  // address:string
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    // this.name=name//parents type extends korai eguli r lagbe na
    // this.age=age
    // this.address=address
    this.designation = designation;
  }
  //   makeSleep(hours: number): string {
  //     return `This ${this.name} will sleep for ${hours}`;//parents type extends korai eguli r lagbe na
  //   }
  takeClasses(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} class`;
  }
}
const teacher = new Teacher("sun", 56, "usa", "head");
console.log(teacher.takeClasses(3));
