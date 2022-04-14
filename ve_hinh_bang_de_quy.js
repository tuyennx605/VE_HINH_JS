const n = 5;

const printLine = (width, add) => {
  if(width === n+1 && add) return;
  if(width === 1) add = 1;

  console.log('*'.repeat(width));

  printLine(width+add, add);
}

printLine(n, -1);