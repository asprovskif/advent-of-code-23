const fs = require('fs');
const data = fs.readFileSync('./adventInputOne.txt', 'utf-8').split('\r\n');

let sum = 0;

for(const line of data) {
    const nums = line.split('').filter(e => Number.isInteger(Number(e)));
    sum += Number(`${nums[0]}${nums[nums.length - 1]}`);
}

console.log('Final result', sum);