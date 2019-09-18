var express = require('express')
var app = express()
var port = 3000

//Express Middleware
app.use(express.json()); //A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(express.static(path.join(__dirname, 'public'))); // To serve static files

//1. application level middleware
var middlewareApp = function (req, res, next) {
    req.middlewareSetProperty = true ;
    console.log("application level middleware")
    next()
  }

 app.use(middlewareApp)

  //2. route specific
  var middlewareRoute = function (req, res, next) {
    console.log("Route specific Middleware")
    next()
  }

  app.use('/routeMiddleware',middlewareRoute);

  // 3.
  var middleware = function (req, res, next) {
    console.log("Middleware")
    next()
  }
  app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');
})




  app.get('/routeMiddleware' , (req,res)=>{
      var responseText = 'route specific middleware<br>'
      responseText += '<small>middlewareSetProperty: ' + req.middlewareSetProperty + '</small>'
      res.send(responseText)
    })

    app.get('/middlewareBeforeHandler' ,middleware , (req,res)=>{
        res.send("Middleware between route and handler")
      })



app.listen(port , ()=>{console.log(`Listening on Port ${port}`)})
