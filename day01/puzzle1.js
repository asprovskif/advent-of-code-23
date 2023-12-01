// const example =
//
// `1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`
// const data = example.split('\n');

const fs = require('fs');
const data = fs.readFileSync('./adventInputOne.txt', 'utf-8').split('\r\n');

let sum = 0;

for(const line of data) {
    const nums = line.split('').filter(e => Number.isInteger(Number(e)));
    sum += Number(`${nums[0]}${nums[nums.length - 1]}`);
}

console.log('Final result', sum);