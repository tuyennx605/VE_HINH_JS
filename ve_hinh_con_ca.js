const n = 19;
let tail = 1, body = 1;

for(let i=1; i<=n; i++) {
  const space = n - 2*tail;
  const line = i === ( Math.ceil(n/2)) ?
        ('*'.repeat(tail + body - 1))
        : 
        ('*'.repeat(tail) 
        +' '.repeat(space)
        + '*'.repeat(body))

  if(i < n/2){ tail++; body+=2;}
  else{ tail--; body-=2;}
  
  console.log(line);
}