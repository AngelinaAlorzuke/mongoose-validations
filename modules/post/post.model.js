const {Schema, model} = require("mongoose")

const postSchema = new Schema({
    title: {
        type: String,
        required:true,
        minlength:3,
    },
    body:{
        type: String,
        required:true,
        minlength:10,
    },
    published:{
        type: Boolean,
        default:false,
    },
}

)
module.exports = model("Posts", postSchema)