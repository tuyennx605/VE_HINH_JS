const n = 3, h = 7;

const spaceStr = ' ';
let leftSpace = Math.floor(h/2), centerSpace = -1;

for(let i=0; i<h; i++) {
  let line = i=== Math.floor(h/2) ? '*': '';
  for(j=0; j<n; j++) {
    if(i===0 || i===h-1) {
      line+= spaceStr.repeat(leftSpace) + '*' + 
            (j === n-1 ? '' : spaceStr.repeat(leftSpace-1));
    }else if(i=== Math.floor(h/2)){
      line += spaceStr.repeat(centerSpace) + '*';
    }else{
      line += spaceStr.repeat(leftSpace) + '*' +
             spaceStr.repeat(centerSpace) + '*' +
             (j === n-1 ? '' :spaceStr.repeat(leftSpace-1))
    }
  }

  if(i >= Math.floor(h/2)) {
    leftSpace++;
    centerSpace-=2;
  }else{
    leftSpace--;
    centerSpace+=2;
  }

  console.log(line);

}