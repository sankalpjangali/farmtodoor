// const Url = require("../models/url");
const express=require("express")
const app=express()
const path=require("path")
app.set("view engine","ejs")
// const user = require("../model/user");
const user = require("../model/user");
const { title } = require("process");
app.set("views",path.resolve("./views"))
async function homepagerender(req,res){
    res.render("login")
}
async function userlogin(req,res){
    // console.log(req.body.email);
    if(req.body.email && req.body.password){
    //    console.log(req.body.email)
        const user1=await user.findOne({email:req.body.email,password:req.body.password})
        if(user1){
            res.render("homepage",{title:"homepage"})}
        else{
            res.send("unauthorized user")
        }
    }
else{
    res.render("login",{title:"login page"})
}
}
async function userregister(req,res){
    // console.log(req.body.email);
    if(req.body.email && req.body.password && req.body.fullName && req.body.phone && req.body.address && req.body.confirmPassword){
    //    console.log(req.body.email)
    try{
       if(req.body.password==req.body.confirmPassword){
       const user1= await user.insertOne({email:req.body.email,password:req.body.password,name:req.body.fullName,phone:req.body.phone,address:req.body.address})
         res.render("login",{title:"login page"})
       }
       else{
        res.render('register',{title:'alert',alert: {
            type: 'error', // or 'error', 'warning', 'info'
            title: 'error!',
            message: 'password and confirm password should be same',
            dismissible: true,
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>'
        }})
   }
}
    catch(err){
        console.log(err.message)
        }
    }
     else
     { 
        res.render('register',{title:'registration page',alert: {
            type: 'warning', // or 'error', 'warning', 'info'
            title: 'Warning!',
            message: 'all fields are mandatory',
            dismissible: true,
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>'
        }})
    }
}

module.exports = {
    homepagerender,
    userlogin,
    userregister
};
