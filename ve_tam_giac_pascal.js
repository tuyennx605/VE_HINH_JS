const n = 11;
const spaceStr = ' ', widthNumber = 4;
let a = [], space = n*widthNumber/2  - widthNumber/2;

for(let i=0; i<n; i++) {
  if(i === 0) {
    a.push([1]);
  }else{
    a[i] = [];
    for(let j=0; j<=i; j++) {
      a[i].push( (a[i-1][j-1] || 0) + (a[i-1][j] || 0) )
    }
  }
  
  console.log(spaceStr.repeat(space) + a[i].map((tempNumber, index) => {
    if(index === 0) return tempNumber;
    const newStr = (spaceStr.repeat(widthNumber) + tempNumber);
    return newStr.substr(newStr.length - widthNumber, newStr.length)
  }).join(''));
  space-= widthNumber/2;
}
