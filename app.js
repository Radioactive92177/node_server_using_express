import express from "express";

//? Initialising app for the server
const app = express();

//? Middleware
app.use((req, res, next) => {
  console.log("I'm middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("I'm middleware 2");
  res.send("<h1>Hi from the server</h1>");
});

//? Initialising server
app.listen(3000);
