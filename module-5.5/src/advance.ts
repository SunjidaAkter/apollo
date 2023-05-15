interface Model<TData, TMethod> {
  data: TData;
  methods: TMethod;
}
//properties
interface IProperty {
  fName: string;
  lName: string;
}
//methods
interface IMethod {
  fullName(): string;
}
type model = Model<IProperty, IMethod>;

class User implements model {
  data: IProperty;
  methods: IMethod;
  constructor(fName: string, lName: string) {
    this.data = { fName, lName };
    this.methods = {
      fullName() {
        return `${fName} ${lName}`;
      },
    };
  }
}
const user = new User("sun", "mun");
console.log(user.methods.fullName());
