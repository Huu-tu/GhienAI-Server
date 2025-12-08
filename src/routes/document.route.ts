import { Router } from 'express'
import FileUpload from '../middlewares/fileUpload'
import { getAllDocument, uploadFileDocument } from '~/controllers/document.controller'

const router: Router = Router()

// Documents
router.get('/get-documents', getAllDocument)
router.post('/upload-document', FileUpload.single('file'), uploadFileDocument)

export default router
