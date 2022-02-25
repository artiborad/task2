const express=require("express")
const router = express.Router()
const Product = require("../models/model") 
const mongoose =require("mongoose")

router.get("/",async(req,res)=>{
    try{
        const data = await Product.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.post("/",async(req,res)=>{
    const product= new Product({
        
        product_id:req.body.product_id,
        product_name:req.body.product_name,
        quantity:req.body.quantity
    })
    try{
        const data= await Product.save()
        res.send(data)
    }catch{[
        res.send(e)
    ]}
})
module.exports = router;