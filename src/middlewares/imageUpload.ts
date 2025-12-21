import multer from 'multer'
import { Request } from 'express'

const imgStorage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, 'public/img')
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

const imgUpload = multer({ storage: imgStorage })

export default imgUpload
