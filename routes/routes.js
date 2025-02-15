const express=require('express');
const app=express();
const path=require("path");
const routeurl=express.Router();
routeurl.get('/',(req,res)=>{
    res.render('heros.ejs',{title:'heros Page'});
});
routeurl.get('/login',(req,res)=>{
    res.render('login.ejs',{title:'Login Page'});
});
routeurl.get('/product',(req,res)=>{
    res.render('products.ejs',{title:'product Page'});
});
module.exports=routeurl;