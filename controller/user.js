// const Url = require("../models/url");
const express=require("express")
const app=express()
const path=require("path")
app.set("view engine","ejs")
// const user = require("../model/user");
const user = require("../model/user");
const { title } = require("process");
const farmer = require("../model/farmer");
app.set("views",path.resolve("./views"))

async function homepage(req,res){
    const farmer1=await farmer.find()
    res.render("homepage",{title:"homepage",farmers:farmer1})
}
async function farmerregistration(req,res){
    try{
        console.log(req.body.email)
        // console.log(req.params.email)
        console.log(req.body)
    const user1=await farmer.insertMany({email:req.body.email,password:req.body.password,first_name:req.body.first_name,last_name:req.body.last_name,address:req.body.address,experience:req.body.experience,products:req.body.products,image:req.body.image,phone:req.body.phone})
    res.render("login",{title:"login page",alert:null})
}catch(err){
    console.log(err.message)
    res.send("error occured")
}
}
async function farmerdetails(req,res){
    const farmer1=await farmer.find()
    console.log(farmer1.image)
    res.render("farmers",{title:"farmerdetails",farmers:farmer1})
    }
async function productdetail(req,res){
    const farmer1=await farmer.find()
    res.render("products",{title:"productdetails",farmers:farmer1})
    }
async function farmerdetailone(req,res){
    const farmer1=await farmer.find()
    res.render("products",{title:"productdetails",farmers:farmer1})
    }
async function heros_product(req,res){
    const farmer1=await farmer.find()
    res.render("heros",{title:"heros",farmers:farmer1})
    }


async function userlogin(req,res){
        // console.log(req.body.email);
    if(req.body.email && req.body.password){
    //    console.log(req.body.email)
        const user1=await user.findOne({email:req.body.email,password:req.body.password})
        if(user1){
            res.render("heros",{title:"homepage"})}
        else{
            res.render('login',{title:'login page',alert: {
                type: 'error', // or 'error', 'warning', 'info'
                title: 'error!',
                message: 'Username or password is incorrect',
                dismissible: true,
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>'
            }})
        }
    }
else{
    res.render("login",{title:"login page",alert: null})
}
}
async function userregister(req,res){
    // console.log(req.body.email);
    if(req.body.email && req.body.password && req.body.fullName && req.body.phone && req.body.address && req.body.confirmPassword){
    //    console.log(req.body.email)
    try{
       if(req.body.password==req.body.confirmPassword){
       const user1= await user.insertOne({email:req.body.email,password:req.body.password,name:req.body.fullName,phone:req.body.phone,address:req.body.address})
         res.render("login",{title:"login page",alert:null})
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
    
    userlogin,
    userregister,
    farmerregistration,
    farmerdetails,
    productdetail,
    homepage,
    heros_product
};
   