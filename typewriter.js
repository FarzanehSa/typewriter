const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  },delay += 500);
}
setTimeout(() => {
  console.log('\n');
},delay);