import { Router } from 'express'
import { getAllContact, getSingleContact, createContact } from '~/controllers/contact.controller'

const router: Router = Router()

// Contact
router.get('/get-contact', getAllContact)
router.get('/view-contact/:id', getSingleContact)
router.post('/create-contact', createContact)

export default router
