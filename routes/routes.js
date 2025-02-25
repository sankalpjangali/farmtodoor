const express=require('express');
const app=express();
const path=require("path");
const routeurl=express.Router();
const {homepagerender,userlogin,userregister}=require("../controller/user")
routeurl.get('/',(req,res)=>{
    res.render('heros.ejs',{title:'heros Page'});
});
routeurl.get('/login',(req,res)=>{
    res.render('login.ejs',{title:'Login Page'});
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
routeurl.get('/product',(req,res)=>{
    res.render('products.ejs',{title:'product Page'});
});
routeurl.get('/homepage',(req,res)=>{
    res.render('homepage.ejs',{title:'homepage Page'});
});
routeurl.get('/farmers/registration',(req,res)=>{
    res.render('farmers_registration.ejs',{title:'homepage Page'});
});
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