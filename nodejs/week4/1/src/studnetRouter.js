const express = require("express");
const Student = require("./student");
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  res.send([]);
});

studentRouter.post("/", (req, res, next) => {
  const { body } = req;
  try {
    const student = new Student(body);
    res.send(student);
  } catch (err) {
    res.status(400);
    return next(err);
  }
});

module.exports = {
  studentRouter
};
