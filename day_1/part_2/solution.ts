const fs = require('fs')
const path = require('path');
const filePath = path.resolve('../day_1', '../input.txt');

let inputData: number[];

fs.readFile(filePath, 'utf8', (err: Error, data: string) => {
  if (err) {
    console.error(err)
    return
  }
  inputData = data.split('\n').map(n => parseInt(n));
  console.log(processData(inputData))
})

function processData(input: number[]) {
  return input.reduce((prev, curr, index, arr) => {
    return arr[index] > arr[index - 3] ? prev += 1 : prev
  }, 0)
}

export { }