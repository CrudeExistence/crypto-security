//? Creating a cipher to code a message
//? then I'll be creating a de-cipher
//? Message should display "I love cryptography!"


//* First I'm going to create multiple strings to pull from to cypher a phrase
//* I'm making each list 26 characters long so that modulus 26 will allow any number passed in to return a digit from any of the strings


//* Then I'm going to make a function that will take a string as an input
//* That string will follow a mathmatical systemetic set of rules
//* It will create a new string from a conversion of those strings above
//* Which will return complete jibberish

let first = 'abcdefghijklmnopqrstuvwxyz'
let second = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let third = `'";:.>,</?[{}]!-_=+~*()&^%`

const cypher = (word) => {
    let wordToReturn = ''
    for ( i=0; i<word.length; i++) {
        if (word[i] === ' ') {
            wordToReturn += ' '
        } else {
        for (x=0; x<26; x++) {
            if (word[i] === first[x]) {
                let firstNum = x%3
                if(firstNum === 0) {
                    wordToReturn += first[((x+1)%26)]
                } else if (firstNum === 1) {
                    wordToReturn += second[((x+2)%26)]
                } else if (firstNum === 2) {
                    wordToReturn += third[((x+3)%26)]
                }
            } else if (word[i] === second[x]) {
                let secondNum = x%3
                if(secondNum === 0) {
                    wordToReturn += first[((x+1)%26)]
                } else if (secondNum === 1) {
                    wordToReturn += second[((x+2)%26)]
                } else if ( secondNum === 2 ){
                    wordToReturn += third[((x+3)%26)]
                }
            } else if (word[i] === third[x]) {
                let thirdNum = x%3
                if(thirdNum === 0) {
                    wordToReturn += first[((x+1)%26)]
                } else if (thirdNum === 1) {
                    wordToReturn += second[((x+2)%26)]
                } else if (thirdNum === 2) {
                    wordToReturn += third[((x+3)%26)]
                }
            } 
        }
        }
    }
    return wordToReturn
}

console.log(cypher('I love cryptography!'))

// const index = (enter) => {
//     for(x=0;x<second.length;x++) {
//         if (second[x] === 'F')
//         return x
//     }
// }
// console.log(index(second))

// console.log(index)

// console.log(1%3)
// console.log(2%3)
// console.log(3%3)
// console.log(4%3)
// console.log(5%3)
// console.log(6%3)
// console.log(8%3)
// console.log(9%3)
// console.log(10%3)
// console.log(11%3)
// console.log(12%3)
// console.log(13%3)