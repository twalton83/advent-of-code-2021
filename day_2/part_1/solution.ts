import { access } from "fs";

const fs = require('fs')
const path = require('path');
const filePath = path.resolve('../day_2', '../input.txt');

let inputData: string[];

fs.readFile(filePath, 'utf8', (err: Error, data: string) => {
  if (err) {
    console.error(err)
    return
  }
  inputData = data.split('\n')
  console.log(processData(inputData))
})

interface accumulator {
  [index: string]: number
}

const processData = (data: string[]) => {
  const result = data.reduce((acc: accumulator, curr: string) => {
    const direction = curr.split(" ");
    return {
      ...acc,
      [direction[0]]: acc[direction[0]] + parseInt(direction[1])
    }
  }, {
    forward: 0,
    down: 0,
    up: 0,
  })

  return (result.down - result.up) * result.forward
}