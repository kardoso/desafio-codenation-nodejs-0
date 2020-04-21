'use strict'

/// Returns the fibonacci sequence
const fibonacci = () => {
  // init fibonacci array
  const fibonacciNumbers = [0, 1]

  // keep adding numbers until it passes 350
  while (fibonacciNumbers[fibonacciNumbers.length - 1] <= 350) {
    const lastNumber = fibonacciNumbers[fibonacciNumbers.length - 1]
    const penultimateNumber = fibonacciNumbers[fibonacciNumbers.length - 2]
    const nextNum = lastNumber + penultimateNumber

    // add number to the fibonacci array
    fibonacciNumbers.push(nextNum)
  }

  return fibonacciNumbers
}

/// Checks if a number is in the fibonacci list
const isFibonnaci = (num) => {
  return fibonacci().includes(num)
}

module.exports = {
  fibonacci,
  isFibonnaci,
}
