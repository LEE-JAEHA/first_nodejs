const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')


app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))


app.set("view engine","pug")
app.set("views","./views")

app.get("/", (req, res)=> {
    res.send("hello");
})
/*(
    초반 페이지
)*/
/*

    //var name = req.body
    var name = req.query.name
    //url 에 있는 주소를 보고 name 에 집어넣을 수 있음
    //localhost:3000/?name=jaeha
    //? 가 쿼리의 시작 그 뒤 부터는 &로 한다
    //res.render("main",{name});
    //views 폴더에 있는 main pug를 띄운다
    //만약 views에 temp라는 폴더안에 tmp.pug라는 파일을 띄우려면
    res.render("temp/tmp",{name})
})
*/
/*
    login page
*/
app.get("/login",function(req,res){
    res.render('login');
})
app.post("/login",(req,res)=>{
    console.log(req.body);
    var{email,password}=req.body;
    //or
    //var email = req.body.email;
    //var password =req.body.password;
    res.render('/login',{name:email});

})


/*
    DB사용할 페이지 만들기
*/
app.get("/movie",(req,res)=>{
    var sql = "SELECT * FROM movie";
    connection.query(sql, (error, results, fields)=> {
        if (error) throw error;
        res.render('movie/index', {results});
    });
})


app.post("/movie",(req,res)=>{
    var {title, description, category, thumb} = req.body
    var sql = "INSERT INTO movie (title,description,category,thum) VALUES ( ?,?,?,?)";
    connection.query(sql, [title, description, category, thumbnail], (error, results, fields) => {
        if (error) throw error;
        res.redirect("/movie");
    });
})


app.get("/bootstrap", (req,res)=>{
    res.render('main/main');
})

app.post("/bootstrap2",(req,res)=>{
    res.render("main/main2",{name})
})


app.get("/bootstrap2",(req,res)=>{
    res.render("main/main2")

})


const admin = require('./routes/admin/index');
app.use(admin);

/*
    port 열기
*/
app.listen(3000 , () =>{
    console.log("server running");
})