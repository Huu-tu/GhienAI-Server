import { Request, Response } from 'express'
import Document from '../models/document.model'

export const getAllDocument = ()=>{

}

export const uploadFileDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'Document file is required.' })
      return
    }
    const name = req.file.filename
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