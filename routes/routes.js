const express=require('express');
const app=express();
const mongoose = require('mongoose');
const path=require("path");
const routeurl=express.Router();
const farmer = require("../model/farmer");
const {homepage,userlogin,userregister,farmerregistration,farmerdetails,productdetail,heros_product}=require("../controller/user");
// const farmer = require('../model/farmer');
routeurl.get('/',heros_product);
routeurl.get('/login',(req,res)=>{
    res.render('login.ejs',{title:'Login Page',alert:null});
});
routeurl.get('/admin',(req,res)=>{
    res.render('admin.ejs',{title:'Login Page'});
});
// routeurl.get('/admin/users',(req,res)=>{
//     res.render('users_admin.ejs',{title:'Login Page'});
// });
routeurl.get('/register',(req,res)=>{
    res.render('register.ejs',{title:'register Page',alert:null});
});
routeurl.get('/alert',(req,res)=>{
    res.render('alertbox.ejs',{title:'register Page'});
});
routeurl.post('/register',userregister);
routeurl.post('/login',userlogin);
routeurl.get('/product',productdetail);
routeurl.get('/homepage',homepage);
routeurl.get('/farmers/registration',(req,res)=>{
    res.render('farmers_registration.ejs',{title:'homepage Page'});
});

routeurl.get('/something',async (req,res)=>{
    const productId=req.query.productId
    // const productId = req.params.productId; // This should now have the correct value
    // console.log('Product ID:', typeof(productId)); 
    // const productId = '67c68d6c48cdbf1acd9189e5';
    const farmer1 = await farmer.findOne({ 'products._id': new mongoose.Types.ObjectId(productId) });// Replace the root with the product
    
    const resultfarmer = await farmer.findOne(
        { 'products._id': productId }, // Query to find the farmer with the specific product ID
        { 'products.$': 1 } // Projection to return only the matched product
    );
    // print(resultfarmer.products.image)
    // const product1= farmer1?.products?.id(req.params.productId);
    //  console.log(farmer1.products)
     console.log(resultfarmer)
    //  console.log(farmer1)
    res.render('something.ejs',{title:'cart Page',product:farmer1,farmer:resultfarmer});

});
routeurl.get('/product/addtocart',(req,res)=>{
    res.render('addtocart.ejs',{title:'Cart Page'});
});
routeurl.post('/farmers/registration',farmerregistration);
routeurl.get('/admin/dashboard', (req, res) => {
    res.render('maincontent_admin.ejs', {
        users: {
            avatar: '/path/to/avatar.jpg'
        },
        currentPage: 'dashboard',
        notifications: [1, 2, 3], // Example notifications
        stats: [
            { title: 'Total Users', value: '1,234', change: 12 },
            { title: 'Revenue', value: '$45,678', change: 8 },
            { title: 'Orders', value: '456', change: -3 },
            { title: 'Products', value: '789', change: 5 }
        ],
        activities: [
            {
                title: 'New User Registration',
                description: 'John Doe has registered a new account',
                time: '2 minutes ago'
            },
            {
                title: 'New Order',
                description: 'Order #12345 has been placed',
                time: '15 minutes ago'
            },
            {
                title: 'Product Update',
                description: 'iPhone 15 Pro stock has been updated',
                time: '1 hour ago'
            }
        ]
    });
});
// routes/admin.js
routeurl.get('/admin/users', (req, res) => {
    // Example data - in practice, this would come from your database
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'admin',
            status: 'active',
            lastLogin: '2024-02-24 14:30',
            avatar: '/images/avatar1.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'editor',
            status: 'active',
            lastLogin: '2024-02-24 12:15',
            avatar: '/images/avatar2.jpg'
        }
        // Add more user examples as needed
    ];

    res.render('users_admin', {
        users: users,
        totalUsers: 100, // Total number of users in database
        currentPage: 1,
        notifications: [1, 2, 3],
        totalPages: 10,
        
    });
});
routeurl.get('/farmer',farmerdetails);
module.exports=routeurl;