'use strict'

const fibonacci = () => {
  const fibonacciNumbers = [0, 1]

  while (fibonacciNumbers[fibonacciNumbers.length - 1] <= 350) {
    const lastNumber = fibonacciNumbers[fibonacciNumbers.length - 1]
    const penultimateNumber = fibonacciNumbers[fibonacciNumbers.length - 2]
    const nextNum = lastNumber + penultimateNumber

    fibonacciNumbers.push(nextNum)
  }

  return fibonacciNumbers
}

const isFibonnaci = (num) => null

module.exports = {
  fibonacci,
  isFibonnaci,
}
