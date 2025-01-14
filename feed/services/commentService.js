const Comment = require('../models/comment');

class commentService { 
    constructor(Comment) {
        this.Comment = Comment;
    }

    async createComment(post_id, author_id, content) {
        let date = new Date();
        const comment = new Comment({
            "post_id": post_id,
            "author_id": author_id,
            "content": content,
            "created_at": date,
            "likes": []
        });
        await comment.save();
        return comment;
    }

    async getCommentById(commentId) {
        return Comment.findById(commentId);
    }
}

module.exports = new commentService;