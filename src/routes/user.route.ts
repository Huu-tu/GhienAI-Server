import { Router } from "express"
import { signin, signup } from "../controllers/user.controller"

const router: Router = Router()

// User
router.post("/signin", signin)
router.post("/signup", signup)

router.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'ok',
    message: 'API is working',
    time: new Date().toISOString()
  })
})

export default router