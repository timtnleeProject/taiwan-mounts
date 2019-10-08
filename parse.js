const fs = require('fs')

const raw = fs.readFileSync('./mount.csv', 'utf-8')

const table = raw
  .split('\n')
  .map(str => {
    const cols = str.split('\t')
    const colname = ['id', 'name', 'level', 'height', 'location', 'park', 'series', 'description']
    return colname.reduce((acc, name, index) => {
      acc[name] = cols[index] || ''
      return acc
    }, {})
  })
fs.writeFileSync('./mounts.json', JSON.stringify(table), 'utf-8')
