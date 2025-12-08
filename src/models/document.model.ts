import mongoose from 'mongoose'
const Schema = mongoose.Schema

const DocumentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    fileUrl: {
      type: String,
      required: true
    },
    fileType: {
      type: String
    },
    fileSize: {
      type: Number
    }
  },
  {
    collection: 'documents',
    timestamps: true
  }
)

const Document = mongoose.model('Document', DocumentSchema)
export default Document
