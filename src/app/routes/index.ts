import { Router } from 'express'
import { AuthRoutes } from '../modules/Auth/auth.routes'
import { JourneyRoutes } from '../modules/Journey/journey.routes'
import { WorkRoutes } from '../modules/Work/work.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },

  {
    path: '/journey',
    route: JourneyRoutes,
  },
  {
    path : '/work',
    route : WorkRoutes
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
