const express=require("express");
const app= express();

app.get("/test",function(req,res){
    res.send("test ok");
})

app.post("/test",function(req,res){
    res.send("post ok")
})

app.listen(8080,function(){
   console.log("server started")
})