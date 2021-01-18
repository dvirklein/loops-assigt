const David = 80;
const Vinoth = 77;
const Divya = 88;
const Ishitha = 95;
const Thomas = 68;
const summing = (Thomas + Ishitha + Divya + Vinoth + David) / 5;
if (summing < 60) {
  console.log("F");
} else if (summing >= 60 && summing < 70) {
  console.log("D");
} else if (summing >= 70 && summing < 80) {
  console.log("C");
} else if (summing >= 80 && summing < 90) {
  console.log("E");
} else if (summing >= 90 && summing < 100) {
  console.log("A");
}
