const express = require("express");
const app = express();

app.set("view engine","pug")
app.set("views","./views")

app.get("/", (req, res)=> {
    var name = req.query.name
    //url 에 있는 주소를 보고 name 에 집어넣을 수 있음
    //localhost:3000/?name=jaeha
    //? 가 쿼리의 시작 그 뒤 부터는 &로 한다
    //res.render("main",{name});
    //views 폴더에 있는 main pug를 띄운다
    //만약 views에 temp라는 폴더안에 tmp.pug라는 파일을 띄우려면
    res.render("temp/tmp",{name})
})

app.get("/admin",function(req,res){
    res.send("Hello Node ");
})


app.listen(3000 , () =>{
    console.log("server running");
})