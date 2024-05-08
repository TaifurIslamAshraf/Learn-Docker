const express = require("express")

const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.json({
        message: "Hello from docker"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT:${PORT}`)
})