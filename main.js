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
