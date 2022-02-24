const height = 7, width = 4, size = 3;

console.log('*' + ' '.repeat(width - 2) + '*');

for(let i=0; i<height-1; i++) {
  if(i%size === 0){
    console.log('*'.repeat(width));
  }else{
    console.log('*' + ' '.repeat(width - 2) + '*');
  }
}