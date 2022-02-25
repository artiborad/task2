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
        id:req.body.id,
        product_id:req.body.product_id,
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