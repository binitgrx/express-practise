require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes")
const PORT = Number(process.env.PORT) || 8000;
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.static("public"));

app.use("/api",indexRouter);
app.use((err,req,res,next) => {
    
    const errMsg = err.toString() || "something went wrong";
    res.status(401).json({data: null , msg : errMsg});
})



// app.get("/",(req,res) => {
//     res.json({data : "hello world"});
// })
app.listen(3000,() => {
    console.log(`app is running on port ${PORT}`)
})