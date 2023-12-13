const {Note}=require('../models/Note')
const createnote=async (req,res)=>{
    const{title,desc,status}=req.body
    const note=await Note({title,desc,status});
    note.save();
    res.send("hello friends,note saved"+note)
}
const searchnote=async (req,res)=>{
    const{title}=req.body
    const notes=await Note.find({title});
    res.send("hello friends,i am search"+notes)

}
const deletenote=(req,res)=>{
    res.send("delete a note")
}
module.exports={createnote,deletenote,searchnote}