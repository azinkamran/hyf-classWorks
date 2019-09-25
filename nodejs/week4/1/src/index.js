const express = require("express");
const { studentRouter } = require("./studnetRouter");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

//middleware
app.use(bodyParser.json());
app.use("*", (req, res, next) => {
  const { method, path } = req;
  console.log(`${method} ${path}`);
  next();
});
//mount the routers
app.use("/student", studentRouter);

//error handler
app.use((err,req,res,next)=>{
    // console.log(err);
    // res.send(err);
    res.json({err});
})


app.listen(port, () => {
  console.log(`App staretd at port ${port}`);
});
