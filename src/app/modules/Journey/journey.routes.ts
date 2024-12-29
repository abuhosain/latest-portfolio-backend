import express, { NextFunction, Request, Response } from 'express'
import { JourneyControllers } from './journey.controller'
import { multerUpload } from '../../config/multer.config'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'

const router = express.Router()

// Route for adding experience
router.post(
  '/experience',
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'No logo image uploaded for experience',
      )
    }
    req.body = JSON.parse(req.body.data) // Parse the JSON data for experience details
    next()
  },
  JourneyControllers.addExperience, // Call controller to add experience
)
// Add Skill
router.post('/skill', JourneyControllers.addSkill)

// Route for adding experience
router.post(
  '/education',
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'No logo image uploaded for education',
      )
    }
    req.body = JSON.parse(req.body.data) // Parse the JSON data for experience details
    next()
  },
  JourneyControllers.addEducation, // Call controller to add experience
)
// Get All Journeys (Experience, Skills, Education)
router.get('/', JourneyControllers.getAllJourneys)

// Update Journey (Experience, Skill, Education)
router.put('/:id', JourneyControllers.updateJourney)

// Delete Journey (Experience, Skill, Education)
router.delete('/:id', JourneyControllers.deleteJourney)

export const JourneyRoutes = router
