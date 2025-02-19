const express = require('express');
const routeurl = require('./routes/routes');
const session = require('express-session');
const app = express();
const path = require('path');
const engine = require('ejs-mate');
const connecttomongoose=require("./connection")
const cookieParser = require("cookie-parser");
app.engine('ejs',engine)
app.set("view engine","ejs")
connecttomongoose("mongodb://localhost:27017/farmtodoor")
app.set("views",path.resolve("./views"))// here you have to set where your views are located
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(session({
  secret: '123456', //this is creatd by us
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, '/public')));// we are setting the public folder as static folder and here we are using the path module to join the current directory with the public folder
app.use('/',routeurl)
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});