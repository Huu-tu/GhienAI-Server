import { Application } from 'express'
import blogRoutes from './blog.route'
import caseRoutes from './case-study.route'
import solutionRoutes from './solution.route'
import consultationRoutes from './consultation.route'
import contactRoutes from './contact.route'
import userRoutes from './user.route'

const setupRoutes = (app: Application): void => {
  app.use('/api/user', userRoutes)
  app.use('/api/blog', blogRoutes)
  app.use('/api/case-study', caseRoutes)
  app.use('/api/solution', solutionRoutes)
  app.use('/api/consultation', consultationRoutes)
  app.use('/api/contact', contactRoutes)
}

export default setupRoutes
