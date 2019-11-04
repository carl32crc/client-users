
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i

export function emailValidator(string) {
  return emailRegex.test(string) 
    ? { validate: false, message: 'Correct email.' }
    : { validate: true, message: 'Invalid email.' }
}