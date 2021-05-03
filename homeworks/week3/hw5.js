const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    const numbers = line.split(' ')
    const a = numbers[0]
    const b = numbers[1]
    const p = numbers[2]
    console.log(compare(a, b, p))
  }
}

function compare(a, b, p) {
  if (a === b) {
    return 'DRAW'
  }
  if (p === -1) {
    const temp = a
    a = b
    b = temp
  }

  const aLength = a.length
  const bLength = b.length

  if (aLength !== bLength) {
    return aLength > bLength ? 'A' : 'B'
  }
  return a > b ? 'A' : 'B'
}
