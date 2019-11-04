import { validatorString } from './../../../helpers/Validators/ValidatorString'

const MIN_CHARS = 8

export function passwordValidator(string) {
  const validators = [
    {
      validate: validatorString.containLowerCase(string),
      message: `Min. one lowercase char.`  
    },
    {
      validate: validatorString.containUppercase(string),
      message: `Min. one uppercase char.`  
    },
    {
      validate: validatorString.containNumber(string),
      message: `Min. one number char.`  
    },
    {
      validate: validatorString.containSymbol(string),
      message: `Min. one symbol ex:&/{}()/... char.`  
    },
    {
      validate: validatorString.containNumberOfCharsOrMore(string, MIN_CHARS),
      message: `Min. chars ${MIN_CHARS}.`  
    },
  ].find(({ validate }) => !validate)

  return validators 
    ? validators
    : { validate: true, message: 'Correct format.' } 
}