// const Url = require("../models/url");
const exxpress=require("express")
const app=express()
const path=require("path")
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
async function homepagerender(req,res){
    res.render("login")
}
module.exports = {
    homepagerender
}
