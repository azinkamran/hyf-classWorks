const express=require("express");
const app=express();

// app.use(function(req,res,next){
//     const secret= req.query.secret;
//     if(secret!="radek"){
//         res.status(403).send("no access, nice try hacking");
//         return;
//     }
//     next();
// })

app.get("/",function(req,res){
    //blabla();
    console.log("test")
    res.send("test")
})

app.get("/contact",function(req,res){
    console.log("contact")
    res.send("contact")
})
app.get("/educations",function(req,res){
    console.log("educations")
    res.send("educations")
})

app.get("/skills/:userId",function(req,res){
    console.log(req.params)
    const userId=req.params.userId;
    res.send(`userId:${userId}`)
})

//http://localhost:5000/cont?email=ddd@ddf.com&phone=123456789
app.get("/cont", (req, res) => {
   console.log(req.query);
   res.send(req.query);
});

app.get("/user",function(req,res){
    console.log(req.query);
    res.send(`test ok older than=${req.query.olderthan} , else ${req.query.else}`)
})




//error handler
//creating error loger that saves all the errors
app.use(function(err,req,res,next){
    console.error("Error middleware cought an error",err);

    const errorResponse={
        err:err.toString(),
        url:req.originalUrl
    };
    res.status(500).send(errorResponse);
})


//port
app.listen(5000,function(){
    console.log("server started")
});