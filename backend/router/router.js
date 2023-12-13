const express=require('express')
require('dotenv')
const router=express.Router()
// const {login,signup}=require('../functions/auth')
// const {createnote,deletenote}=require('../functions/note')
const {noterouter}=require('./note')
const {authrouter}=require('./auth')
router.use(authrouter)
router.use(noterouter)







module.exports={router}