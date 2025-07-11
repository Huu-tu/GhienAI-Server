import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false,
      data: Buffer
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    collection: 'blogs',
    timestamps: true
  }
);

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;