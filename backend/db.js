const mongoose=require('mongoose')
async function connectToMongo(){
    (await mongoose.connect('mongodb://127.0.0.1:27017/FirstDb').then(()=>
    {console.log("connected to db")}));
}
module.exports={connectToMongo}