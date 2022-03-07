const n = 2, h = 4;

const spaceStr = " ";
let leftSpace = 0, centerSpace = h * 2 - 3;

for (let i = 0; i < h; i++) {
  let line = i == 0 ? "*" : "";
  for (let j = 0; j < n; j++) {
    if (i === 0) {
      line += spaceStr.repeat(centerSpace) + "*";
    } else if (i === h - 1) {
      line += spaceStr.repeat(leftSpace) + "*" + 
              (j === n-1 ? "" : spaceStr.repeat(leftSpace - 1));
    } else {
      line +=spaceStr.repeat(leftSpace) +
        "*" +
        spaceStr.repeat(centerSpace) +
        "*" +
        (j === n-1 ? "" : spaceStr.repeat(leftSpace - 1));
    }
  }
  leftSpace++;
  centerSpace -= 2;
  console.log(line);
}
