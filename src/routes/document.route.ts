import { Router } from 'express'
import FileUpload from '../middlewares/fileUpload'
import { uploadFileDocument } from '~/controllers/document.controller'

const router: Router = Router()

// Documents
router.post('/add-blog', FileUpload.single('file'), uploadFileDocument)

export default router
