class BankAccount1 {
  public id: number;
  public name: string; //public thakle sob jaiga theke access kora jai
  private balance: number; //private er karone eta just ei class ei access kora jabe r kothao theke access kora jabe na
  protected student_balance: number; //protectected er karone eta or child class thekeo access korte parbo but class er baire access korte parbo na
  constructor(
    id: number,
    name: string,
    balance: number,
    student_balance: number
  ) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.student_balance = student_balance;
  }

  //getter
  get _balance(): number {
    return this.balance;
  }
  getBalance(): number {
    return this.balance;
  }
  // setter
  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }
  addDeposit(amount: number) {
    const res = this.balance + amount;
    return res;
  }
}
const myAccount1 = new BankAccount1(44, "sun", 454, 34);
// myAccount.balance = 0;
console.log(myAccount1.getBalance());
console.log(myAccount1.addDeposit(4));
console.log(myAccount1._balance);
myAccount1.deposit = 2323;
console.log(myAccount1._balance);

class StudentAccount1 extends BankAccount1 {
  test() {
    console.log((this.student_balance = this.student_balance));
  }
}
