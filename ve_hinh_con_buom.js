const h = 7;
const spaceStr = ' ', starStr = '*';
let countStar = 1, space = h - 2;

for(let i=0; i<h; i++) {
  if(i === Math.floor(h/2)) {
    console.log(starStr.repeat(countStar*2 - 1));
  }else{
    console.log(starStr.repeat(countStar) + 
                spaceStr.repeat(space) + starStr.repeat(countStar));
  }

  if( i >= Math.floor(h/2)) {
    countStar--;
    space+=2;
  }else{
    countStar++;
    space-=2;
  }
}
