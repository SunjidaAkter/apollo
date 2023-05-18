import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
const app: Application = express();

//Application route
import uesrRoute from "./app/modules/user/user.route";

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", uesrRoute);

export default app;

//inserting test data into mongoose
/*
1.interfact
2.schema
3.model
4.db query
*/

// createUserToDB();
//   res.send("Hello World!"),
//   next();

//pattern mvc and pattern modular
//mvc er cheye modular pattern valo r recommended
//cause mvc te akta model fifferent file e chorie thake
/*
breakdow process
interface -> interface.ts
schema model -> model.ts
route -> route.ts
rooute function -> controller.ts
database query function -> service.ts

*/
