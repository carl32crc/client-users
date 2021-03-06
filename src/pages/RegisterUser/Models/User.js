import { emailValidator, passwordValidator } from '../../shared'

export class User {

  constructor() {
    this.initialState()
  }

  initialState() {
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.password = ''
    this.validatePassword = { validate: false }
    this.validateEmail = { validate: false }
  }

  setFirstName(firstName) {
    this.firstName = firstName
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  setEmail(email) {
    this.validateEmail = emailValidator(email)
    this.email = email
  }

  setPassword(password) {
    this.validatePassword = passwordValidator(password)
    this.password = password
  }
}