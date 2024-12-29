import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsynch'
import { JourneyServices } from './journey.services'
import sendResponse from '../../utils/sendResponse'

// Controller for adding an experience
const addExperience = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await JourneyServices.addExperienceToDb(payload)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Experience added successfully',
    data: result,
  })
})

// Controller for adding a skill
const addSkill = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await JourneyServices.addSkillToDb(payload)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Skill added successfully',
    data: result,
  })
})

// Controller for adding education
const addEducation = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await JourneyServices.addEducationToDb(payload)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Education added successfully',
    data: result,
  })
})

// Controller for retrieving all entries
const getAllJourneys = catchAsync(async (_req: Request, res: Response) => {
  const result = await JourneyServices.getAllJourneys()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Journeys retrieved successfully',
    data: result,
  })
})

// Controller for updating an entry
const updateJourney = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const payload = req.body
  const result = await JourneyServices.updateJourneyInDb(id, payload)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Journey updated successfully',
    data: result,
  })
})

// Controller for deleting an entry
const deleteJourney = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await JourneyServices.deleteJourneyFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Journey deleted successfully',
    data: result,
  })
})

export const JourneyControllers = {
  addEducation,
  addExperience,
  addSkill,
  deleteJourney,
  updateJourney,
  getAllJourneys,
}
