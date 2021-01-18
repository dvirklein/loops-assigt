const armStrong = Number(prompt("enter an  3 dig integer"));
let sum = 0;
let temp = armStrong;
while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}
if (sum == armStrong) {
  console.log(`${armStrong} is an Armstrong number`);
} else {
  console.log(`${armStrong} is not an Armstrong number.`);
}
