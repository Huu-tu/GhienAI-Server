import { Router } from 'express'
import { signin, signup, UploadImageSingle } from '~/controllers/user.controller'
import ImgUpload from '../middlewares/imageUpload'

const router: Router = Router()

// User
router.post('/signin', signin)
router.post('/signup', signup)

// Upload image
router.post('/upload-image', ImgUpload.single('file'), UploadImageSingle)
export default router
