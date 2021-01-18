const firstNum = Number(prompt("enter first integer"));
const secondNum = Number(prompt("enter second integer"));
const thirdNum = Number(prompt("enter third integer"));
let bigNum = firstNum;
let secondBigNum = secondNum;
let lastNum = thirdNum;
if (firstNum > secondNum && firstNum > thirdNum) {
  bigNum = firstNum;
  if (secondNum > thirdNum) {
    secondBigNum = secondNum;
    lastNum = thirdNum;
  } else {
    secondBigNum = thirdNum;
    lastNum = secondNum;
  }
} else if (firstNum < secondNum && secondNum > thirdNum) {
  bigNum = secondNum;
  if (firstNum > thirdNum) {
    secondBigNum = firstNum;
    lastNum = thirdNum;
  } else {
    secondBigNum = thirdNum;
    lastNum = firstNum;
  }
} else if (firstNum < thirdNum && secondNum < thirdNum) {
  bigNum = thirdNum;
  if (secondNum > firstNum) {
    secondBigNum = secondNum;
    lastNum = firstNum;
  } else {
    secondBigNum = firstNum;
    lastNum = secondNum;
  }
}
alert(bigNum + "" + secondBigNum + "" + lastNum);
