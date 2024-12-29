import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Journey } from './jorney.model'

// Create functions for different types
export const addExperienceToDb = async (payload: any) => {
  if (payload.type !== 'experience') {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Invalid type for experience entry',
    )
  }
  return await Journey.create(payload)
}

export const addSkillToDb = async (payload: any) => {
  if (payload.type !== 'skill') {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid type for skill entry')
  }
  return await Journey.create(payload)
}

export const addEducationToDb = async (payload: any) => {
  if (payload.type !== 'education') {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Invalid type for education entry',
    )
  }
  return await Journey.create(payload)
}

// Shared function to get all entries
export const getAllJourneys = async () => {
  return await Journey.find()
}

// Shared function to update an entry
export const updateJourneyInDb = async (id: string, payload: any) => {
  const journey = await Journey.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  )
  if (!journey) {
    throw new AppError(httpStatus.NOT_FOUND, 'Journey entry not found')
  }
  return journey
}

// Shared function to delete an entry
export const deleteJourneyFromDb = async (id: string) => {
  const journey = await Journey.findByIdAndDelete(id)
  if (!journey) {
    throw new AppError(httpStatus.NOT_FOUND, 'Journey entry not found')
  }
  return journey
}

export const JourneyServices = {
  addExperienceToDb,
  addEducationToDb,
  addSkillToDb,
  getAllJourneys,
  updateJourneyInDb,
  deleteJourneyFromDb,
}
