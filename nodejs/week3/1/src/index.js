const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  password: "Azinreza1",
  user: "root",
  database: "phonebook"
});

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.get("/", (req, res) => {
  res.send("hyf week3");
});

// app.get("/add-contact", (req, res) => {
//   const contact = {
//     name: "Azin",
//     phonenumber: "123456789"
//   };
//   db.query("INSERT INTO contacts SET ?", contact, function(err, result, query) {
//     if (err) {
//       console.error(err);
//     }
//     if (!err) {
//       res.send("contact added");
//     }
//   });
// });

app.post("/add-contact", (req, res) => {
  console.log(req.body);
  const contact = req.body;
  db.query("INSERT INTO contacts SET ?", contact, function(err, result, query) {
    if (err) {
      console.error(err);
    }
    if (!err) {
      res.send("contact added");
    }
  });
});

// contact/1
app.get("/contact/:id", (req, res) => {
  const id = req.params.id;
  db.query("select * from contacts where idcontacts=?", id, function(
    err,
    result,
    query
  ) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.send(result);
  });
});

app.listen(3000);
