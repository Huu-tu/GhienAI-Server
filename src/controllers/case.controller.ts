import { Request, Response, NextFunction } from 'express'
import CaseStudy from '../models/case.model'

export const getAllCase = async (req: Request, res: Response): Promise<void> => {
  try {
    const cases = await CaseStudy.find()
    if (cases && cases.length > 0) {
      res.status(200).json(cases)
    } else {
      res.status(404).json({
        message: 'No case found.'
      })
    }
  } catch (error: any) {
    if (error.isJoi === true) {
      res.status(400).json({
        message: 'Invalid details provided.'
      })
    } else {
      res.status(500).json({
        message: 'An error occurred while fetching blogs.',
        error: error.message
      })
    }
  }
}

export const getSingleCase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id).select('title shortDescription description image type createdAt')

    if (!caseStudy) {
      res.status(404).json({ message: 'CaseStudy not found' })
      return
    }

    res.status(200).json(caseStudy)
  } catch (error) {
    next(error)
  }
}

export const createCase = async (req: Request, res: Response): Promise<void> => {
  const title = req.body.title
  const shortDescription = req.body.shortDescription
  const description = req.body.description
  const type = req.body.type

  if (!req.file) {
    res.status(400).json({ message: 'Image file is required.' })
    return
  }
  const image = req.file.filename

  const data = await CaseStudy.create({
    title,
    shortDescription,
    description,
    type,
    image
  })

  if (data) {
    res.status(200).json('Success')
  } else {
    res.json('Failed')
  }
}
