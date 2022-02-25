const mongoose=require("mongoose")

const stockSchema = mongoose.Schema({
    product_id:{
        type:Number,
        require:true
    },
    product_name:{
        type:String,
        require:true
    },
    count:{
        type:Number,
        require:true
    }
})

const stock_table = mongoose.model("stock_table",stockSchema)
module.exports=mongoose.model("stock_table",stockSchema)