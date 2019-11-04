import { RegisterUser } from '../pages/RegisterUser'
import { SignInUser } from '../pages//SignInUser'

export default [
  {
    component: RegisterUser,
    path: '/register'
  },
  {
    component: SignInUser,
    path: '/',
  },
]