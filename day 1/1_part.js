const fs = require('fs');
let max = 0;
let total = 0;
try {
  const data = fs.readFileSync('input.txt').toString()
  data.split("\r\n\r\n").forEach(each => {
    const cals = each.split('\r\n');
    let total = 0;
    cals.forEach(cal => {
      total += +cal;
    })
    // console.log('tottal :: ', total);
    if(total > max) {
      max = total
    }
  })
} catch (e) {
  console.log('Error:', e.stack);
}

console.log('max :: ', max); 