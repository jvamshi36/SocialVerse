const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // refer to user sechema
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", // refer to post sechema
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like", // refer to like sechema
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
