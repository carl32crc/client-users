import { Subject } from './../../../subject'
import { User } from '../Models/User'
import { createUser } from '../../../services/user.service'
import { handlerError } from '../../../helpers/handlerError'

class UserController {
  
  constructor(User, Subject) {
    this.user = User
    this.subject = Subject
    this.error = null
    this.response = null
  }

  setEmail(email) {
    this.user.setEmail(email)
    this.subject.publish(this)
  }

  setFirstName(firstName) {
    this.user.setFirstName(firstName)
    this.subject.publish(this)
  }

  setLastName(lastName) {
    this.user.setLastName(lastName)
    this.subject.publish(this)
  }

  setPassword(password) {
    this.user.setPassword(password)
    this.subject.publish(this)
  }

  createUser() {
    createUser(this.user)
      .then(response => {
        this.response = { 
          data: response.data, 
          message: handlerError(response) 
        }
        this.error = null;
        this.subject.publish(this)
      })
      .catch((error) => {
        this.response = null;
        this.error = handlerError(error.response)
        this.subject.publish(this)
      })
  }
}

const userController = new UserController(new User(), new Subject());

export {
  userController
}
