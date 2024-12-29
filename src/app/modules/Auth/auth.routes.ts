import express, { NextFunction, Request, Response } from 'express'
import { AuthControllers } from './auth.controller'
import validateRequest from '../../middleware/validateRequest'
import { AuthValidation } from './auth.validation'
const router = express.Router()

// signup user
router.post(
  '/signup',
  AuthControllers.singupUser,
  validateRequest(AuthValidation.userValidationSchema),
)

// login user
router.post(
  '/login',
  AuthControllers.loginUser,
  validateRequest(AuthValidation.loginValidationSchema),
)

export const AuthRoutes = router;