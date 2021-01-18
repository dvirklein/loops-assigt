const firstNum = Number(prompt("enter first integer"));
const secondNum = Number(prompt("enter second integer"));
if (firstNum === secondNum) {
  alert("equal");
} else if (firstNum >= secondNum) {
  alert(firstNum);
} else {
  alert(secondNum);
}
