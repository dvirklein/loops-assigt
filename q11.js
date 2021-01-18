const numberOne = Number(prompt("enter an num"));
const numberTwo = Number(prompt("enter an num"));
if (numberOne > numberTwo) {
  console.log(`${numberOne - numberTwo}`);
} else if (numberOne < numberTwo) {
  console.log(`${numberTwo - numberOne}`);
} else {
  console.log("equal");
}
