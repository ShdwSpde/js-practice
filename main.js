let nums = [40,20,30,70,50]

let numsSquared = nums.map(n => n * n)

console.log(numsSquared)


let nums = [4,2,7,4,5]

function reverseStr(str) {
  let reverseStr = str.split('').reverse().join('')
  console.log(reverseStr)
}

// flexasaurus
const isPalindrome = s === s.split('').reverse().join('') ? alert ('YES') : alert ('NO')

function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('')
  if ( str.toLowerCase() === reverseStr.toLowerCase() ) {
    alert('Yes')
  }else {
    alert('No')
  }
}


let drink = {}

drink.brand = 'Gatorade'
drink.flavor = 'red'
drink.size = '32 oz'
drink.hasAlcohol = 'false'
drink.pour = function () {
  console.log ("Now, its all over the floooorrrr!!!!")
}
drink.cheers = function () {
  console.log (`I love ${this.brand}`)

let order = {
  entree: 'burger',
  side: 'fries',
  soda: '16 oz',
  dessert: 'frosty'
}
  
