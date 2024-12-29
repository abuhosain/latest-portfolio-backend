import express, { NextFunction, Request, Response } from 'express'
import { WorkControllers } from './work.controller'
import { multerUpload } from '../../config/multer.config'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'

const router = express.Router()

// Route for adding new work entry
router.post(
  '/',
  multerUpload.single('file'), // Upload file (e.g., logo image for the work)
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'No logo image uploaded for work',
      )
    }
    req.body = JSON.parse(req.body.data) // Parse the JSON data for work details
    next()
  },
  WorkControllers.addWork, // Call the controller to add a new work entry
)

// Route for getting all work entries
router.get('/', WorkControllers.getAllWorks)

// Route for getting a work entry by ID
router.get('//:id', WorkControllers.getWorkById)

// Route for updating a work entry by ID
router.put(
  '/:id',
  multerUpload.single('file'), // Upload file for updating work details
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'No logo image uploaded for work update',
      )
    }
    req.body = JSON.parse(req.body.data) // Parse the JSON data for work details
    next()
  },
  WorkControllers.updateWork, // Call the controller to update the work entry
)

// Route for deleting a work entry by ID
router.delete('/:id', WorkControllers.deleteWork)

export const WorkRoutes = router
