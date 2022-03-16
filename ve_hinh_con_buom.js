const h = 7;
const spaceStr = ' ', startStr = '*';
let countStar = 1, space = h - 2;

for(let i=0; i<h; i++) {
  if(i === Math.floor(h/2)) {
    console.log(startStr.repeat(countStar) + startStr.repeat(countStar-1));
  }else{
    console.log(startStr.repeat(countStar) + 
                spaceStr.repeat(space) + startStr.repeat(countStar));
  }

  if( i >= Math.floor(h/2)) {
    countStar--;
    space+=2;
  }else{
    countStar++;
    space-=2;
  }
}
