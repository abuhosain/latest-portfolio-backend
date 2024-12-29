import { Router } from 'express'
import { AuthRoutes } from '../modules/Auth/auth.routes'
import { JourneyRoutes } from '../modules/Journey/journey.routes'

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
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
