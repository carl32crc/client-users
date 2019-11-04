import axios from 'axios'
import { api } from '../constants'

const { apiUrl } = api

const createUser = (user) => {
  return axios.post(`${apiUrl}users`, {...user})
}

export {
  createUser
}