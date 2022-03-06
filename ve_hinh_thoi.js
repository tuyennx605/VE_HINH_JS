const n = 3, w = 5;

console.log(' '.repeat(w/2) + '*');

for(let i=0; i<n; i++) {
  let leftSpace = w/2 - 1, centerSpace = 1;
  for(let j=1; j<w; j++) {
    if(centerSpace <= 0) {
      console.log(' '.repeat(leftSpace) + '*');
    }else{
      console.log(' '.repeat(leftSpace) + '*' + ' '.repeat(centerSpace) + '*');
    }

    if(j < w/2 -1 ) {
      leftSpace--; centerSpace+=2;
    }else{
      leftSpace++; centerSpace-=2;
    }
  }
}