import { Subject } from './../../../subject'
import { User } from '../Models/User'
import { signIn } from '../../../services/signIn.service'
import { handlerError } from '../../../helpers/handlerError'

class SignInController {
  
  constructor(User, Subject) {
    this.user = User
    this.subject = Subject
    this.error = null
    this.response = { message: null }
  }

  setEmail(email) {
    this.user.setEmail(email)
    this.subject.publish(this)
  }

  setPassword(password) {
    this.user.setPassword(password)
    this.subject.publish(this)
  }

  signIn(toastRef) {
    signIn(this.user)
      .then(response => {
        this.response = { 
          data: response.data, 
          message: response.data.message 
            ? response.data.message 
            : handlerError(response) 
        }
        this.error = null
        toastRef.current.showToast()
        this.subject.publish(this)
      })
      .catch((error) => {
        this.response = null
        this.error = handlerError(error.response)
        toastRef.current.showToast()
        this.subject.publish(this)
      })
  }
}

const signInController = new SignInController(new User(), new Subject());

export {
  signInController
}