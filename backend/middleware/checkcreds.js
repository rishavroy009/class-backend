const checkcreds=(req,res,next)=>{


const {name,email,password,cpassword}=req.body

if(name.length<3 || password!==cpassword){
    res.send("Invalid creds")
}
    next()
}
module.exports={checkcreds}