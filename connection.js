const mongoose=require("mongoose")
async function connecttomongoose(url) {
    return mongoose.connect(url).then(console.log(`connected to mongoose`)).catch((err)=>{console.log(`somethhiing went wrong ${err}`)})
}
module.exports=
    connecttomongoose;