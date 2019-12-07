
const status = {
  200: 'Success',
  201: 'Success create',
  400: 'Incorrect params by url.',
  401: 'Credentials nedeed',
  404: 'Not found',
  500: 'Server error contact with admin',
  'connection-lost': 'Connection Lost check your wifi'
}

const handlerError = (response = { status: 'connection-lost' }) => {
  return status[response.status]
}
    
export { handlerError }