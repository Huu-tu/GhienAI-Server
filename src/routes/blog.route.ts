import { Router } from 'express'
import { getAllBlog, getSingleBlog, createBlog } from '~/controllers/blog.controller'
import ImgUpload from '../middlewares/fileUpload'

const router: Router = Router()

// Blogs
router.get('/get-blogs', getAllBlog)
router.get('/view-blog/:id', getSingleBlog)
router.post('/add-blog', ImgUpload.single('image'), createBlog)

export default router
