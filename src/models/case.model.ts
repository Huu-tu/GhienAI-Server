import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CaseStudySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    description: {
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
    collection: 'case-study',
    timestamps: true
  }
)

const CaseStudy = mongoose.model('CaseStudy', CaseStudySchema)
export default CaseStudy
