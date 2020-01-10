
var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

/*
* Sum of Two Digits Problem
* --------------------------
* Compute the sum of two single digit numbers.
* Input: Two single digit numbers.
* Output: The  sum  of  these  numbers
*/

function readLine (line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    console.log(a + b);
    process.exit();
  }
}