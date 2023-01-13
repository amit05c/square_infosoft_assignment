const express= require("express")
const { connection } = require("mongoose")
const app=express()
app.use(express.json())
const PORT= process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
           console.log(err)
    }

    console.log(`server running on port ${PORT}`)
})