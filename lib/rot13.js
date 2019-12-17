module.exports = str => {
  // Define the actual alphabet with lower and uppercase letter
  const realAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  // Secret Alphabet
  const secretAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'

  // Define function 'findIndex' that will return the 'indexOf' a letter in the 'realAlphabet'
  // findIndex('A') would return 0
  const findIndex = letter => realAlphabet.indexOf(letter)

  // Define function 'translate' will encode (or decode) our letter
  // Will return the 'translated' letter
  const translate = letter => {
    if (realAlphabet.indexOf(letter) === -1) {
      // if its not in our alphabet, dont translate it
      return letter
    }
    return secretAlphabet[findIndex(letter)]
  }

  // Split the string that we got as a parameter into an array
  // Map over the array and translate each letter
  // Finally join the array of letters back into a string
  return str.split('').map(translate).join('')
}
