import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Journey } from './jorney.model'

const addExperienceToDb = async (payload: any, file: any) => {
  const experienceData = {
    ...payload,
    logoUrl: file?.path,
  }

  // Save the experience data in the database
  const result = await Journey.create(experienceData)
  return result
}

export const addSkillToDb = async (payload: any) => {
  if (payload.type !== 'skill') {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid type for skill entry')
  }
  return await Journey.create(payload)
}

const addEducationToDb = async (payload: any, file: any) => {
  const educationData = {
    ...payload,
    logoUrl: file?.path,  
  }

   
  const result = await Journey.create(educationData)
  return result
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
