const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const postSchema = new mongoose.Schema({
  author_id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  likes: [String],
  comments: [ObjectId]
});

module.exports = mongoose.model('Post', postSchema);