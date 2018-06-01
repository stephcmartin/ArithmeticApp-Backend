var fs = require('fs')

// To use this file run 'node index.js'

// TESTING FILES:
// Removing , to create new file newTestData.csv to test on a low level

// const readTestData = fs.readFileSync('./src/test.csv', 'utf8').replace(/,/g, "").replace(/\|/g, ",")
// const replaceTestData = fs.writeFileSync('./src/replaceTestData.csv', readTestData)

// Removing , to create new file newData.csv

const readData = fs.readFileSync('./src/data.csv', 'utf8').replace(/,/g, "").replace(/\|/g, ",")
const newData = fs.writeFileSync('./src/newData.csv', readData)
