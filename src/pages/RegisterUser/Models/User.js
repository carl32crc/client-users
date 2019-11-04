

export class User {

  constructor() {
    this.initialState()
  }

  initialState() {
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.password = ''
  }

  setFirstName(firstName) {
    this.firstName = firstName
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  setEmail(email) {
    this.email = email
  }

  setPassword(password) {
    this.password = password
  }
}