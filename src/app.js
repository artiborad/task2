const express = require("express")
const mongoose = require("mongoose")
const app = express()
const proRoute = require("./stock_table/routers/router")



const dbURI="mongodb+srv://arti:arti1234@cluster0.yj4az.mongodb.net/loginapi?retryWrites=true&w=majority"


app.use(express.json())
app.use("/routers",proRoute)



mongoose.connect(dbURI , {useNewUrlParser: true}).then(()=>{
    console.log("connection sucessfully")
}).catch((error)=>{
    console.log("not connnected"+error)
})


app.listen(9000, () => {console.log("Server started: 9000")})