import express from 'express'
import { JourneyControllers } from './journey.controller'
import validateRequest from '../../middleware/validateRequest'

const router = express.Router()

// Add Experience
router.post('/experience', JourneyControllers.addExperience)

// Add Skill
router.post('/skill', JourneyControllers.addSkill)

// Add Education
router.post('/education', JourneyControllers.addEducation)

// Get All Journeys (Experience, Skills, Education)
router.get('/journeys', JourneyControllers.getAllJourneys)

// Update Journey (Experience, Skill, Education)
router.put('/journey/:id', JourneyControllers.updateJourney)

// Delete Journey (Experience, Skill, Education)
router.delete('/journey/:id', JourneyControllers.deleteJourney)

export const JourneyRoutes = router
