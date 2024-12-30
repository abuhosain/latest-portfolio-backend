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

export const addSkillToDb = async (payload: any, file : any) => {
  const educationData = {
    ...payload,
    icon: file?.path,
  }

  const result = await Journey.create(educationData)
  return result
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

export const getSingleJourney = async (id: string) => {
  return await Journey.findById(id)
}

// Shared function to update an entry
export const updateJourneyInDb = async (
  id: string,
  payload: any,
  file: any,
) => {
  let updatedData = payload

  const journey = await Journey.findById(id)
  if (journey?.type === 'skill') {
    if (file?.path) {
      updatedData = {
        ...payload,
        icon: file?.path,
      }
    }
  } else {
    if (file?.path) {
      updatedData = {
        ...payload,
        logoUrl: file?.path,
      }
    }
  }

  // Update the work entry by its ID
  const result = await Journey.findByIdAndUpdate(id, updatedData, { new: true })
  return result
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
  getSingleJourney,
  deleteJourneyFromDb,
}
