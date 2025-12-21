import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ImageUrlSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: false,
      data: Buffer
    }
  },
  {
    collection: 'imageUrls',
    timestamps: true
  }
)

const ImageUrl = mongoose.model('ImageUrl', ImageUrlSchema)
export default ImageUrl
