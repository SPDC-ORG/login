import { postRegister } from '../controllers/userRegisterController'
import express from 'express'

const userRoute = express.Router()

userRoute.post('/',postRegister)

export default userRoute