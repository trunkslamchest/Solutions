// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-instagram-stickers-749df57ecba4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// I am at a carnival, and I found a stand that sells Instagram stickers.
// I want to see how many stickers I would need to buy in order to create a phrase or word.
// The phrase I want to create only contains letters from the stickers I can buy.

// For instance,
// I would need to buy 2 stickers in order to create the phrase ‘artisan martians,’
// 3 stickers to create the phrase ‘taming giant gnats’
// and 1 sticker to create the word ‘tiara.’

// Return the minimum amount of times the string ‘instagram’ would need to be repeated to create a given string.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  - Define a function called InstagramStickers
//    - InstagramStickers accepts a string argument called phrase
//
//  - Define 3 variables in InstagramStickers()
//    - An empty object named charCount to store character frequencies in phrase
//    - An integer set to 0 named minimumStickers to keep track of the minimum amount of stickers we will need to buy
//    - A string named phraseToLower set to a lowercase conversion of phrase
//
//  - Loop through phrase with a for in loop to build the charCount object
//    - if a character is not blank
//      - and a character is not present in charCount
//        - add the character as a key to charCount and set it's value to 1
//      - otherwise
//        - increment the value of the key (or the frequency of the character) in charCount
//
//  - Loop through charCount with a for in loop to set minimumStickers
//    - if a character is the letter 'a', divide the characters value by 2 and round the dividend up to the nearest integer
//      - replace the character's value in charCount with the result
//    - if minimum stickers is less than the frequency of a character
//      - replace the value of minimum stickers with the frequency of the character
//
//  - Return minimumStickers

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function instagramStickers(phrase) {
  let charCount = {}, minimumStickers = 0, phraseToLower = phrase.toLowerCase()
  for(let char in phraseToLower) if (phraseToLower[char] !== ' ') charCount[phraseToLower[char]] = ( charCount[phraseToLower[char]] || 0 ) + 1
  for(let char in charCount){
    if(char === 'a') charCount[char] = Math.round(charCount[char] / 2)
    if(minimumStickers < charCount[char]) minimumStickers = charCount[char]
  }
  return minimumStickers
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(instagramStickers('artisan martians')) // 2
console.log(instagramStickers('artiSAN MARTians')) // 2
console.log(instagramStickers('taming giant gnats')) // 3
console.log(instagramStickers('tAmInG gIaNt GnAtS')) // 3
console.log(instagramStickers('tiara')) // 1
console.log(instagramStickers('TIARA')) // 1
console.log(instagramStickers(' ')) // 0
console.log(instagramStickers('')) // 0
