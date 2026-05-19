const express=require("express");
const app=express();
require("dotenv").config()
const connectDB=require("./config/db");

connectDB();

app.use(express.json());//ability to read json from frontend
app.get("/",(req,res)=>{
res.send("Running succcess");
});
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server Live at ${PORT} `);
})