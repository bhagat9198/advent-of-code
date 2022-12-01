const fs = require('fs');
let first = 0;
let second = 0;
let third = 0;
try {
  const data = fs.readFileSync('./input.txt').toString()
  data.split("\r\n\r\n").forEach(each => {
    const cals = each.split('\r\n');
    let total = 0;
    cals.forEach(cal => {
      total += +cal;
    })
    if(total > first) {
      if(first > second) {
        second = first
      }
      first = total
    } else if (total > second) {
      if (second > third) {
        third = second
      }
      second = total
    } else if (total > third) {
      third = total
    }  
  })
} catch (e) {
  console.log('Error:', e.stack);
}


console.log('max :: ', first + second + third);