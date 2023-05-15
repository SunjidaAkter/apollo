interface Model<TData, TMethod> {
  data: TData;
  methods: TMethod;
}

interface IProperty {
  fName: string;
  lName: string;
}
interface IMethod {
  fullName(): string;
}
// type model
