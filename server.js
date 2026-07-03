require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch(err=>{
    console.log(err);
});

app.post("/save",async(req,res)=>{

    try{

        const user = new User(req.body);

        await user.save();

        res.json({
            success:true,
            message:"Data Saved"
        });

    }
    catch(err){

        res.json({
            success:false,
            message:err.message
        });

    }

});

app.listen(process.env.PORT,()=>{

    console.log("Server Running");

});