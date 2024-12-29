import express, { NextFunction, Request, Response } from 'express'
import { AuthControllers } from './auth.controller'
const router = express.Router()

// singin in login
router.post(
  '/signup',
  AuthControllers.singupUser,
  validateRequest(AuthValidation.loginValidationSchema),
)

// singin in login
router.post(
  '/login',
  AuthControllers.loginUser,
  validateRequest(AuthValidation.loginValidationSchema),
)
