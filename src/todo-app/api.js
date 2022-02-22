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

const {EmpData} = require("./json.js")

app.get("/getUser", function(req,res){
    try{
      res.send(EmpData)
    }catch(error){
       res.send(error)
    }
})