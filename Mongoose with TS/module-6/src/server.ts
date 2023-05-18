import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//database
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log(`Database connected`);
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

bootstrap();
