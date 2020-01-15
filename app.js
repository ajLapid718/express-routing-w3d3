const express = require("express");
const app = express();
const PORT = 3000;

// accept "apple" or "ale", returning the string "Apple or Ale?";

app.get(["/apple", "/ale"], (req, res, next) => {
  res.status(200).json("Apple or Ale?");
});

// accept the word "whoa" with an arbitrary number of os (one or more "o" characters) and as (one or more "a" characters), returning "I know, right?!";

app.get("/who+a+", (req, res, next) => {
  res.status(200).json("I know, right?!");
});

// take a first name and last name as parameters, returning a greeting for that user;

app.get("/:firstName/:lastName", (req, res, next) => {
  res.status(200).json(`Hello, ${req.params.firstName} ${req.params.lastName}`);
});

// take a word as a parameter and returning the word reversed;

app.get("/:inputword", (req, res, next) => {
  res.status(200).json(req.params.inputword.split("").reverse().join(""));
});

// add a route that will execute if nothing else is matched;
app.get("*", (req, res, next) => {
  res.status(404).json("404 NOT FOUND");
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});