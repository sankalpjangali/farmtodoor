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
routeurl.get('/homepage',(req,res)=>{
    res.render('homepage.ejs',{title:'homepage Page'});
});
routeurl.get('/farmer',(req,res)=>{
    res.render('farmers.ejs',{title:'farmers Page',  farmers : [
        {
            name: "Rajesh Kumar",
            location: "Maharashtra",
            experience: "15 years",
            products: [
                { name: "Tomatoes", price: "₹40/kg", inStock: true },
                { name: "Potatoes", price: "₹30/kg", inStock: true },
                { name: "Onions", price: "₹25/kg", inStock: false }
            ],
            rating: 4.5,
            image: "/path/to/farmer-image.jpg" // Add the path to the image
        },
        {
            name: "Rajesh Kumar",
            location: "Maharashtra",
            experience: "15 years",
            products: [
                { name: "Tomatoes", price: "₹40/kg", inStock: true },
                { name: "Potatoes", price: "₹30/kg", inStock: true },
                { name: "Onions", price: "₹25/kg", inStock: false }
            ],
            rating: 4.5,
            image: "/path/to/farmer-image.jpg" // Add the path to the image
        },
        {
            name: "Rajesh Kumar",
            location: "Maharashtra",
            experience: "15 years",
            products: [
                { name: "Tomatoes", price: "₹40/kg", inStock: true },
                { name: "Potatoes", price: "₹30/kg", inStock: true },
                { name: "Onions", price: "₹25/kg", inStock: false }
            ],
            rating: 4.5,
            image: "/path/to/farmer-image.jpg" // Add the path to the image
        },
        {
            name: "Rajesh Kumar",
            location: "Maharashtra",
            experience: "15 years",
            products: [
                { name: "Tomatoes", price: "₹40/kg", inStock: true },
                { name: "Potatoes", price: "₹30/kg", inStock: true },
                { name: "Onions", price: "₹25/kg", inStock: false }
            ],
            rating: 4.5,
            image: "/path/to/farmer-image.jpg" // Add the path to the image
        },
    

    ]});
});
module.exports=routeurl;