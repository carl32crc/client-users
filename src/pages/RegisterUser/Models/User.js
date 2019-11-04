import { emailValidator, passwordValidator } from '../Utils'

export class User {

  constructor() {
    this.initialState()
  }

  initialState() {
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.password = ''
    this.validatePassword = { validate: true }
    this.validateEmail = { validate: true }
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