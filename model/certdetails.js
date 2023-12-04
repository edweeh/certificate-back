const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://edwinksunny:edwinksunny@cluster0.xdutnjl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const certschema = new sc({
    sid:{type:mongoose.Schema.Types.ObjectId,ref:'students'},
    qualification:String,
    certphoto:{
        data : Buffer,
        contentType:String,
    }
    
});

var certmodel =mongoose.model("certdetails",certschema)
module.exports =certmodel;

