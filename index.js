const express = require('express');
const routeurl = require('./routes/routes');
const app = express();
const path = require('path');
const engine = require('ejs-mate');
app.engine('ejs',engine)
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))// here you have to set where your views are located
app.use(express.static(path.join(__dirname, '/public')));// we are setting the public folder as static folder and here we are using the path module to join the current directory with the public folder
app.use('/',routeurl)

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});