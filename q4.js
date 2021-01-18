const firstNum = Number(prompt("enter first integer"));
const secondNum = Number(prompt("enter second integer"));
const thirdNum = Number(prompt("enter third integer"));
const forthNum = Number(prompt("enter forth integer"));
const fifthNum = Number(prompt("enter fifth integer"));
if (
  firstNum > secondNum &&
  firstNum > thirdNum &&
  firstNum > forthNum &&
  firstNum > fifthNum
) {
  alert(firstNum);
}

if (
  secondNum > firstNum &&
  secondNum > thirdNum &&
  secondNum > forthNum &&
  secondNum > fifthNum
) {
  alert(secondNum);
}
if (
  thirdNum > firstNum &&
  secondNum < thirdNum &&
  thirdNum > forthNum &&
  thirdNum > fifthNum
) {
  alert(thirdNum);
}
if (
  forthNum > firstNum &&
  forthNum > secondNum &&
  thirdNum < forthNum &&
  forthNum > fifthNum
) {
  alert(forthNum);
}
if (
  fifthNum > firstNum &&
  fifthNum > secondNum &&
  fifthNum > thirdNum &&
  forthNum < fifthNum
) {
  alert(fifthNum);
}
