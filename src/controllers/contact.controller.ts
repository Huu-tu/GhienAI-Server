import { Request, Response, NextFunction } from 'express'
import Contact from '../models/contact.model'

export const getAllContact = async (res: Response): Promise<void> => {
  try {
    const consultations = await Contact.find()

    if (consultations && consultations.length > 0) {
      res.status(200).json(consultations)
    } else {
      res.status(404).json({
        message: 'No contact found.'
      })
    }
  } catch (error: any) {
    if (error.isJoi === true) {
      res.status(400).json({
        message: 'Invalid details provided.'
      })
    } else {
      res.status(500).json({
        message: 'An error occurred while fetching consultations.',
        error: error.message
      })
    }
  }
}

export const getSingleContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await Contact.findById(req.params.id).select('name email phone topic description tech createdAt')

    if (!data) {
      res.status(404).json({ message: 'Contact not found' })
      return
    }

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
}

export const createContact = async (req: Request, res: Response): Promise<void> => {
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const topic = req.body.topic

  const data = await Contact.create({
    name,
    email,
    phone,
    topic
  })

  if (data) {
    res.status(200).json('Success')
  } else {
    res.json('Failed')
  }
}
