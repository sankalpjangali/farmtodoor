const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    Stock:Number,
    inStock: Boolean,
    description:String
});


const farmerSchema=new mongoose.Schema({
    
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    products:[productSchema],
    image:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    }

})
const farmer=mongoose.model("farmer",farmerSchema)
module.exports=farmer