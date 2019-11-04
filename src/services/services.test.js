import { signIn } from './signIn.service'
import { createUser } from './user.service'

/* eslint-disable */
describe('API users check methods', () => { 
  
  test('it should create user', async () => {
    createUser({ email: 'leroy@gmail.com', firstName: 'Alex', lastName: 'Ramirez', password: '123asdASD/' })
      .then(response => {
        if(response.data.message) {
          expect(response.data).toHaveProperty('message', 'This user is already registered.')
        } else {
          expect(response.data).toHaveProperty('email', 'leroy@gmail.com')
        }
    })
  })

  test('it should incorrect password sign in user', () => {
    signIn({ email: 'leroy@gmail.com', password: '123wqeq' })
      .then(response => {
        expect(response.data).toHaveProperty('message', 'Email or password incorrect.')
    })
  })

  test('it should correct password sign in user', () => {
    signIn({ email: 'leroy@gmail.com', password: '123asdASD/' })
      .then(response => {
        expect(response.data).toHaveProperty('user')
    })
  })
})