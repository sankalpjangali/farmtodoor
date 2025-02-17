// const Url = require("../models/url");
const express=require("express")
const app=express()
const path=require("path")
app.set("view engine","ejs")
// const user = require("../model/user");
const user = require("../model/user");
app.set("views",path.resolve("./views"))
async function homepagerender(req,res){
    res.render("login")
}
async function userlogin(req,res){
    console.log(req.body.email);
    if(req.body.email && req.body.password){
       console.log(req.body.email)
        const user1=await user.findOne({email:req.body.email,password:req.body.password})
        if(user1){
            res.render("homepage")}
        else{
            res.send("unauthorized user")
        }
    }
else{
    res.render("login")
}
}

module.exports = {
    homepagerender,
    userlogin
};
