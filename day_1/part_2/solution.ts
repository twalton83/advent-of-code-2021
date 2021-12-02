const fs = require('fs')
const path = require('path');
const filePath = path.join(__dirname, 'input.txt');

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
    if (index === 0 || arr[index] === arr[index - 1]) {
      return prev
    } else if (arr[index] > arr[index - 1]) {
      return ({
        "increase": prev["increase"] += 1,
        "decrease": prev["decrease"]
      })
    } else {
      return ({
        "increase": prev["increase"],
        "decrease": prev["decrease"] += 1
      })
    }
  }, { increase: 0, decrease: 0 })
}


export { }