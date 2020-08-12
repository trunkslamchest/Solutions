// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var toLowerCase = function(str) {
  let a = ''

  for(char in str){
    if(str.charCodeAt(char) < 91 && str.charCodeAt(char) > 64) a += String.fromCharCode(str.charCodeAt(char) + 32)
    else a += str[char]
  }

  return a
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(toLowerCase('Hello')) // 'hello'
console.log(toLowerCase('here')) // 'here'
console.log(toLowerCase('LOVELY')) // 'lovely'