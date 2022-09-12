const Posts = require("./post.model")

exports.getAllPosts = async (req,res) => {
    const post = await Posts.find({});
    res.status(200).json({ post });
};

exports.createPost = async(req,res)=> {
    const {title, body} = req.body;

    const post = await Posts.create({
        title,
        body,
    })
    res.status(201).json({post});
}

