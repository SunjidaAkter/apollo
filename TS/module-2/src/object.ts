//types declared implicitely
const users = {
  name: "Montu Mia",
  isMarried: true,
  age: 33,
};

//types declared explicitely
const users1: {
  company: "programming hero"; //specific value add korte chaile evabe korte hoi eta k literal type bole
  //uporer value ta chaileo change kora jabe na eta nicher moto koreo lakha jai
  // readonly company:string;
  name: string;
  isMarried: boolean;
  age: number;
  wife?: string; //thakteo pare na o thakte pare abar type string o hote pare abar undefined o hote pare
} = {
  company: "programming hero",
  name: "Montu Mia",
  isMarried: true,
  age: 33,
};
