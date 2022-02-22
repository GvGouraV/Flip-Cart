var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Listening on ${port}!`));

let {mobiles,brandPics,reviews} = require("./Json.js")

app.get("/deals",function(req,res){
    let arr = mobiles.filter((op,index)=>index>=20&&index<30||index>=3&&index<=6)
    console.log("hy")
    res.send(arr)
})

app.get("/products/mobiles/:id",function(req,res){
    let id = req.params.id
    let arr = mobiles.find(op=>op.id==id)
    res.send(arr) 
})

app.get("/:brand",function(req,res){
  let brand =  req.params.brand
  let arr = brandPics.find(op=>op.brand==brand)
  res.send(arr)
})

app.get("/reviews/:id/:start/:end" ,function(req,res){
  let start = +req.params.start
  let id  = req.params.id
  let end = +req.params.end
 console.log(id)
  let arr = reviews.find(op=>op.mobileId==id)
   let list = arr.ratings.filter((p,index)=>index>=start&&index<=end)
   let num = parseInt(reviews.length/3)
   console.log(num)
  let json = {page:start,numOfItem:arr.length,total:reviews.length,numOfPages:num}
  let arr2 = {list:list,pageinfo:json}
  res.send(arr2)
})
