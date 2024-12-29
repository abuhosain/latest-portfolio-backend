import { IWork } from './work.interface'
import { Work } from './work.model'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'

// Create a new work entry
const addWorkToDb = async (payload: IWork) => {
  const workData = new Work(payload)
  const result = await workData.save()
  return result
}

// Get all work entries
const getAllWorksFromDb = async () => {
  const works = await Work.find()
  return works
}

// Get work entry by ID
const getWorkByIdFromDb = async (id: string) => {
  const work = await Work.findById(id)
  if (!work) {
    throw new AppError(httpStatus.NOT_FOUND, 'Work not found')
  }
  return work
}

// Update a work entry by ID
const updateWorkInDb = async (id: string, payload: IWork) => {
  const updatedWork = await Work.findByIdAndUpdate(id, payload, { new: true })
  if (!updatedWork) {
    throw new AppError(httpStatus.NOT_FOUND, 'Work not found')
  }
  return updatedWork
}

// Delete a work entry by ID
const deleteWorkFromDb = async (id: string) => {
  const deletedWork = await Work.findByIdAndDelete(id)
  if (!deletedWork) {
    throw new AppError(httpStatus.NOT_FOUND, 'Work not found')
  }
  return deletedWork
}

export const WorkServices = {
  addWorkToDb,
  getAllWorksFromDb,
  getWorkByIdFromDb,
  updateWorkInDb,
  deleteWorkFromDb,
}
