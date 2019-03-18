var mongoose = require('mongoose');
const bodyParser= require('body-parser');
var model = require('./schemas');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/sae',{ useNewUrlParser: true });

var db = mongoose.connection;



app.use(bodyParser.urlencoded({
   extended: true
 }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Content-Type", "application/json");
   next();
 });




app.get('/', function (req, res) {
   res.send('Hello World');
   var newAdmin = new model.admin({
      username:'cipriann',
      password:'cacat'
   })

   newAdmin.save(function(err,newadmin){
      if (err) return console.error(err);
      else console.log(newAdmin.username, " has been added");
   })
})


//LOGIN ADMIN PANEL

app.post('/adminLogin', function(req,res) {

   console.log(req.body);
   let username = req.body.username;
   let password = req.body.password;

   model.admin.findOne({username,password}, function(err,person){
      if (err) {
         console.log(err);
         res.send({login:false});
      }
      else if (person !== null) {
         res.send({login:true});
      }
      else {
         res.send({login:false});
      }
   });

})




//GET MENU LINKS

app.get('/getMenuItems', function(req,res) {
   model.saeMenu.find({},function(err,array) {
      if (err) throw err;
      else {
         res.send(array);
      }
   });
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
