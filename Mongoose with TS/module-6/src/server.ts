import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// const express = require("express");
// const mongoose = require("mongoose");

const app = express();
const port = 5000;

//database
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test/practice-mongoose");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log(`Database connected`);
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

bootstrap();

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});
