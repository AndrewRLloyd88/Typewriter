const sentence = "hello there from lighthouse labs";
//sentence length is 32 characters so it will take 32 seconds to print out "hello there from lighthouse labs"
// console.log(sentence.length)
//set time to a variable to be incremented on in each loop
let time = 0;

for (const char of sentence) {

setTimeout(() => {
  // print the char here
  process.stdout.write(char)
  // console.log(time);
  //32 chars * 50 = 1600
}, time += 50) // <= 1s delay to make it noticeable. Can dial it down later.


}

//create a new line after the above has executed as time = phrase length * the incremeent
// e.g. 32 * 1000(1second) === 320000
setTimeout(() => {
  process.stdout.write("\n");
}, time);
