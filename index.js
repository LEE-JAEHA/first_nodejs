const express = require("express");
const app = express();

app.set("view engine","pug")
app.set("views","./views")



app.get("/", (req, res)=> {
    res.send("Hello Node ");
})

app.get("/admin",function(req,res){
    var name = req.query.name
    //url 에 있는 주소를 보고 name 에 집어넣을 수 있음
    res.render("")

})


app.listen(3000 , () =>{
    console.log("server running");
})