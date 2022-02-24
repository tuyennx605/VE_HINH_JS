const n = 4, w = 4;

console.log('*'.repeat(w));

for(let i=0; i<n; i++) {
  let space = w-2;
  for(let j=w-2; j>=0; j--) {
    if(j === 0) {
      console.log('*'.repeat(w));
    }else{
      console.log(' '.repeat(space) + '*');
    }
    space--;
  }
}