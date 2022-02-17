const sentence = "hello there from lighthouse labs";
let delay = 0;
// delayed 50ms for each output
for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  },delay += 500);
}
// we print '\n' at the end to avoid printing '%' at end of out sentence.
setTimeout(() => {
  console.log('\n');
},delay);