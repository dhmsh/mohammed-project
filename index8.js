const express= require("express")
const app = express();
const port = 5000

app.listen(port,()=>{console.log("server working on 5000 port")})

//connect mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user").then(
  () => {
    console.log("MongoDb is connect");
  },
 (err) => {
    console.log(err);
  }
);

//do a  schema
const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
    email: { type: String, required: true},
    age: { type: Number, required: false },
  
  });
const User = mongoose.model("User Model", userSchema);



//adding data in schema
app.get("/r" , (req , res)=>{
    const user = new User({
        name:"mohammed",
       email: "",
        age:14 ,
    }) 
    user.save()
    .then((result) => {
  res.json(result);
 })
 .catch((err) => {
     res.json(err);
  });
})





//read information 
app.get("/read" , (req , res)=>{
    User.find().then((result)=>{
        res.render(mohammedvl8+'/index8.ejs',{result:result})
    }).catch((err)=>{
        res.json(err)
     })
 })


app.listen(port , ()=>{
    console.log('server working at port 5000');
})