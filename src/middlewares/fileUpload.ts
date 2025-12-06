import multer from 'multer'
import { Request } from 'express'

const fileStorage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, './src/publics/file/document')
  },
  filename: function (req: Request, file, cb) {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

const fileUpload = multer({
  storage: fileStorage
  // limits: {
  //   fileSize: 50 * 1024 * 1024
  // }
})

export default fileUpload
