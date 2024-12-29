import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.services'
import catchAsync from '../../utils/catchAsynch'

const singupUser = catchAsync(async (req, res) => {
  const user = req.body
  const result = await AuthServices.signUpUserIntoDb(user)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is registered successfully',
    data: result,
  })
})

export const AuthControllers = {
  singupUser,
}
