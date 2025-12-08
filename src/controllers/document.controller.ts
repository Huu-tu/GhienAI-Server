import { Request, Response } from 'express'
import Document from '../models/document.model'

export const getAllDocument = async (req: Request, res: Response): Promise<void>=>{
  try {
    const documents = await Document.find()
    if (documents && documents.length > 0) {
      res.status(200).json(documents)
    } else {
      res.status(404).json({
        message: 'No documents found.'
      })
    }
  } catch (error: any) {
    if (error.isJoi === true) {
      res.status(400).json({
        message: 'Invalid details provided.'
      })
    } else {
      res.status(500).json({
        message: 'An error occurred while fetching documents.',
        error: error.message
      })
    }
  }
}

export const uploadFileDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'Document file is required.' })
      return
    }
    const name = req.file.originalname
    const fileUrl = req.file.filename
    const fileType = req.file.mimetype
    const fileSize = req.file.size

    const data = await Document.create({
      name,
      fileUrl,
      fileType,
      fileSize
    })

    res.status(200).json({
      message: 'Success',
      data
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to upload document', error })
  }
}

export const downLoadDocument = ()=>{

}

export const deleteDocument = ()=>{

}