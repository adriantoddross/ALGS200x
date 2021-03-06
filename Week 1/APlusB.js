
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
    var integers = line.toString().split(' ');
    console.log(parseInt(integers[0], 10) + parseInt(integers[1], 10));
    process.exit();
  }
}