const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://edwinksunny:edwinksunny@cluster0.xdutnjl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const studschema = new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});

var studmodel =mongoose.model("Student",studschema)
module.exports =studmodel;

