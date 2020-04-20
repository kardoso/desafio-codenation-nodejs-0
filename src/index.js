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

/// Checks if a number is a fibonacci number
const isFibonnaci = (num) => {
  // calculate expressions
  const firstExpression = Math.sqrt(5 * Math.pow(num, 2) + 4)
  const secondExpression = Math.sqrt(5 * Math.pow(num, 2) - 4)
  // check if expressions return an integer
  const firstCheck = Number.isInteger(firstExpression)
  const secondCheck = Number.isInteger(secondExpression)

  // check if any of the expressions is true
  if (firstCheck || secondCheck) {
    return true
  }

  return false
}

module.exports = {
  fibonacci,
  isFibonnaci,
}
