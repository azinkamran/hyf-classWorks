const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
​
const app = express();
​
​
const db = mysql.createConnection({
    host: "localhost",
    password: "p2ssw00rd",
    user: "abdul",
    database: "phonebook"
});
​
​
db.connect();
​
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
​
// route for the home directory - GET request
app.get("/", (req, res)=>{
    res.send("HYF week3 home page");
});
​
// route for adding data to the database - POST request
app.post("/add-contact", (req, res)=>{
    console.log(req.body)
    const contact = req.body;
    db.query("INSERT INTO contacts SET ?", contact, function(err, result, query){
        if(err){
            throw err;
        }
        if(!err){
            res.send("contact added successfully!");
        }
    })
})
​
// route for getting a specific `contact` with the corresponding `id` - GET request 
app.get("/contact/:id", (req, res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM contacts WHERE idcontacts = ?", id, function(err, result, query){
        if(err){
            throw err;
        }
        if(!err){
            res.send(result);
        }
    })
})
​
// route for deleting a specific `contact` with the corresponding `id` - DELETE request
app.delete("/delete-contact/:id", (req, res)=>{
    const id = req.params.id;
    db.query("DELETE FROM contacts WHERE idcontacts = ?", id, function(err, result, query){
        if(err){
            throw err;
        }
        if(!err){
            res.send(`Contact with id ${id} delteded successfully`);
        }
    })
})
​
​
​
app.listen(3000);