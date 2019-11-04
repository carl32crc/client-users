import { RegisterUser } from '../pages/RegisterUser'
import { SignInUser } from '../pages//SignInUser'

export default [
  {
    component: SignInUser,
    path: '/login',
  },
  {
    component: RegisterUser,
    path: '/register'
  }
]