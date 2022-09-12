const express = require("express");
const postsRouter = require("./modules/post/post.route");
const { dbConnect } =require("./config/dbconnect")

const app = express();

app.use(express.json());

app.all("./",(req,res)=> {
    res.status(200).send("Welcome to my server. use /posts to get all")
})

app.use("/posts" , postsRouter);

const start = async () =>{
    await dbConnect();
    
    app.listen(4000,() =>{
        console.log("Server listening on https://localhost:4000")
    } );
}

start();