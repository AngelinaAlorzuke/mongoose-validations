const express = require("express");
const postRouter = require("./modules/users/auth.route");
const {authRouter} = require("./modules/users/auth.route")
const {dbConnect} = require("./config/dbConnect")

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res
    .status(200)
    .send("Welcome to my server .please use /posts to get all your product")
})

app.use("/posts" , postRouter);
app.use("/auth" , authRouter);

async function start () {
    await dbConnect();

    app.listen(4000, (err) => {
        console.log("Server listening on https://localhost:4000");
    });
}

start();