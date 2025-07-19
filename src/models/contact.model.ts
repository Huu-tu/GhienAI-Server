import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    topic: {
      type: String,
      required: true
    }
  },
  {
    collection: 'contacts',
    timestamps: true
  }
)

const Contact = mongoose.model('Contact', ContactSchema)
export default Contact
