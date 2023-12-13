const express=require('express')
require('dotenv')
const authrouter=express.Router()
const {login,signup}=require('../functions/auth')
// const {createnote,deletenote}=require('../functions/note')
const {checkcreds}=require('../middleware/checkcreds')
authrouter.get('/login',login)

authrouter.post('/signup',checkcreds,signup)


// router.get('/createnote',createnote)

// router.get('/delete',deletenote)







module.exports={authrouter}