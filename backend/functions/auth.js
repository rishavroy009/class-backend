const {User}=require('../models/User')
var bcrypt =require('bcryptjs');

const login=async (req,res)=>{
const{email,password}=req.body
const user=User.find({email,password});

const signature='!@#$G19123'
if(user.length>=1){
    const status= await bcrypt.compare(password, user[0].password)
    var token=jwt.sign({name:'Rishav Roy'},signature);
    console.log("token",token);
    var decoded=jwt.verify(token,signature)
    console.log("decoded token",decoded)
    if(status){
        return res.send({"status":true,user})
    }
    else{
        return res.send({"status":false,"message":"invalid creds"})
    }
}
else{
    res.send({"status":false,"message":"Invalid creds"})
}
}
const signup=async (req,res)=>{
   const{name,email,password}=req.body
   var salt=await bcrypt.genSalt(10);
   var haspassword=await bcrypt.hash(password,salt);
const user=User({name,email,password:haspassword});
user.save();
res.send("hello friends,i am signup"+ user)
}
module.exports={login,signup}