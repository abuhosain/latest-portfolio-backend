import express, { NextFunction, Request, Response } from 'express'
import { AuthControllers } from './auth.controller'
import validateRequest from '../../middleware/validateRequest'
import { AuthValidation } from './auth.validation'
const router = express.Router()

// signup login
router.post(
  '/signup',
  AuthControllers.singupUser,
  validateRequest(AuthValidation.userValidationSchema),
)

// singin in login
// router.post(
//   '/login',
//   AuthControllers.loginUser,
//   validateRequest(AuthValidation.loginValidationSchema),
// )

export const AuthRoutes = router;