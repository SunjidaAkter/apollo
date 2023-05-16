import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting test data into mongoose
  /*
1.interfact
2.schema
3.model
4.db query
*/

  //creating interface
  interface IUser {
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
  //creating schema using interface

  //   res.send("Hello World!");
  //   next();
});

export default app;
