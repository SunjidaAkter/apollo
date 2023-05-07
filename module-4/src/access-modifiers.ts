class BankAccount {
  public id: number;
  public name: string;
  private balance: number;
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
  getBalance() {
    console.log(`My current balance is ${this.balance}`);
  }
  addDeposit(amount: number) {
    this.balance = this.balance + amount;
  }
}
const myAccount = new BankAccount(44, "sun", 454, 34);
// myAccount.balance = 0;
console.log(myAccount);

class StudentAccount extends BankAccount {
  test() {
    console.log((this.student_balance = this.student_balance));
  }
}
