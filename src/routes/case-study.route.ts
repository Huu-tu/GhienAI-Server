import { Router } from 'express'
import { getAllCase, getSingleCase, createCase } from '~/controllers/case.controller'
import ImgUpload from '../middlewares/imageUpload'

const router: Router = Router()

// Case study
router.get('/get-cases', getAllCase)
router.get('/view-case/:id', getSingleCase)
router.post('/add-case', ImgUpload.single('image'), createCase)

export default router
