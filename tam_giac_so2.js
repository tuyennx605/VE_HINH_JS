let n = 15;
const space = '_';
for(let i=1; i<=n; i++) {
  let leftHalf = [];
  for(let j=i; j> Math.floor(i/2); j--) {
    leftHalf.push(j%10);
  }
  const rightHalf = [...leftHalf].reverse();
  if(i%2 !=0 )  rightHalf.shift();

  const line = space.repeat(n-i) + leftHalf.join(space) + (i===1 ? '' :space) + rightHalf.join(space);
  console.log(line);
}
