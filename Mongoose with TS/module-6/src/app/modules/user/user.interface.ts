import { HydratedDocument, Model } from "mongoose";

//creating interface
export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContctNo: string;
  presentAddress: string;
  parmanentAddress: string;
}
// Put all user instance methods in this interface:
export interface IUserMethods {
  fullName(): string;
}
//static method's interface
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
