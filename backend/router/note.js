const express=require('express')
require('dotenv')
const noterouter=express.Router()
// const {login,signup}=require('../functions/auth')
const {createnote,deletenote}=require('../functions/note')
const {islogin}=require('../middleware/islogin')
// router.get('/login',login)

// router.get('/signup',signup)


noterouter.get('/createnote',islogin,createnote)

noterouter.get('/delete',islogin,deletenote)







module.exports={noterouter}