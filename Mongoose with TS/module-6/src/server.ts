import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//database
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log(`Database connected`);
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

bootstrap();
