import axios from 'axios'
import { api } from '../constants'

const { apiUrl } = api

const signIn = (user) => {
  return axios.post(`${apiUrl}authenticate`, {...user})
}

export {
  signIn
}