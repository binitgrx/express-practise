require("dotenv").config();
const express = require("express");
const app = express();

const PORT = Number(process.env.PORT) || 3000;


app.get("/",(req,res) => {
    res.json({data : "hello world"});
})
app.listen(3000,() => {
    console.log("app is running")
})