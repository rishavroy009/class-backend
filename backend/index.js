const express=require('express')
const dotenv=require('dotenv')
const {connectToMongo}=require('./db')
const {router}=require('./router/router')
const app=express()
dotenv.config()
app.use(express.json())
const port=process.env.PORT
connectToMongo()
app.use(router)

app.listen(port,()=>{
    console.log("app started")
})