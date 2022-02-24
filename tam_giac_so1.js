let n = 20;
console.log(`vẽ hình ===> n=${n}`);
let s = '';
for(let i=1; i<=n; i++) {
  s = i===1 ? ((i%10) + s) :(i%10 + ' ' + s)
  console.log(s);
}
