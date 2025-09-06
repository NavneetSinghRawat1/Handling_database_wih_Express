const express =require('express');
const usermodule = require('./usermodule');
const app=express();
const usermodle=require('./usermodule');

app.get('/',(req,res)=>{
    res.send("helloooo");
});

app.get('/create',async (req,res)=>{
    let x= await usermodle.create({
        name:"abcd",
        username:"abcdef",
        email:"abcdefghl@gmail.com"
    });
    res.send(x);
});
app.get('/update',async (req,res)=>{
    let x= await usermodle.findOneAndUpdate({name:'rahul'},{name:'rahhul'},{new:true});
    res.send(x);
});
app.get('/read',async (req,res)=>{
    let x= await usermodle.find();//all user
    // let x= await usermodle.find({name:'rahhul'});//all user
    // let x= await usermodle.findOne({name:'rahhul'});//all user
    res.send(x);
});
app.get('/delete',async (req,res)=>{
    let x= await usermodle.findOneAndDelete({name:'rahhul'});
    res.send(x);
});

app.listen(3000);