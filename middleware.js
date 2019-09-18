var express=require("express")
var app=express()

var middleware = (req,res,next) =>
{
	console.log(req.url,"hello--->",req.method);
	next();
}

app.use('/user',middleware)

app.get("/user",(req,res) =>{
  res.send({name:"rahul",lastname:"rathore"})
})


app.get("/order",(req,res)=>{
  console.log("responding")
  res.send({Name:"Navneet",LastName:"Singh"})
})

app.listen(10000)

/*var express = require('express')
const app = express()

var middleware = (req,res,next) =>
{
	console.log(req.url,"--->",req.method);
	next();
}
app.use(middleware)
app.get("/user",middleware,(req,res) =>
{
	console.log("responding")
	res.send({name:"sakshi",lastName:"chaudhary"})
})

app.listen(10000)*/
