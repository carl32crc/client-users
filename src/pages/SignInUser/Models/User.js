import { emailValidator } from '../../shared'

export class User {

  constructor() {
    this.initialState()
  }

  initialState() {
    this.email = ''
    this.password = ''
    this.validateEmail = { validate: true }
  }

  setEmail(email) {
    this.validateEmail = emailValidator(email)
    this.email = email
  }

  setPassword(password) {
    this.password = password
  }
}