const express= require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/userRouter")
const app=express()
app.use(express.json())
const PORT= process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send("Welcome to square_infosoft ")
})
app.use("/user",userRouter)



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