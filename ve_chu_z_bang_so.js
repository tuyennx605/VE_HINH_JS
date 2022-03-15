const n = 2, w = 4;
let count = 0, line = '';

for(let i=0; i<w; i++) {
  line += count%10;
  count++;
}
console.log(line);

for(let i=0; i<n; i++) {
  let space = w-2;
  for(let j=w-2; j>=0; j--) {
    if(j === 0) {
      line = '';
      for(let j=0; j<w; j++) {
        line += count%10;
        count++;
      }
      console.log(line);
    }else{
      console.log(' '.repeat(space) + count%10);
      count++;
    }
    space--;
  }
}