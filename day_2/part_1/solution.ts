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
  console.log(filePath)
  console.log(inputData)
  // console.log(processData(inputData))
})

const processData = (data) => {

}