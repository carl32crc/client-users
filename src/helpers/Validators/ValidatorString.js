

class ValidatorString {
  
  containNumberOfCharsOrMore(string, numberOfChars) {
    return string.length >= numberOfChars
  }
  
  containLowerCase(string) {
    return (/[a-z]/.test(string));
  }

  containUppercase(string) {
    return (/[A-Z]/.test(string));
  }

  containNumber(string) {
    return (/[0-9]/.test(string)); 
  }

  containSymbol(string) {
    return (/[^\w!@£]/.test(string)); 
  }

}

const validatorString = new ValidatorString()

export {
  validatorString
}