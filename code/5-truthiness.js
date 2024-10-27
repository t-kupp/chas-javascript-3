// Truthy and falsy values help in conditional statements. A truthy value is a value
// that is considered true in Boolean context.

// Task 1: Create an array called `values` containing the following values:
// 0, "hello", null, undefined, false, "false", -1 and "JavaScript".
const values = [0, "hello", null, undefined, false, "false", -1, "JavaScript"];
// Task 2: Write a function called `checkTruthiness` that takes a value and
// logs whether it is truthy or falsy.

function checkTruthiness(value) {
  let s = "";
  if (!!value) {
    s = "truthy";
  } else {
    s = "falsy";
  }
  console.log(value + " is " + s);
}

// Task 3: Loop through the `values` array using forEach and call `checkTruthiness` on each value.
values.forEach((el) => checkTruthiness(el));

// Task 4. Loop through the `values` array using a for-loop and call `checkTruthiness` on each value.
for (let el of values) {
  checkTruthiness(el);
}

// Task 5. Loop through the `values` array using a while-loop and call `checkTruthiness` on each value.
let counter = 0;
while (counter < values.length) {
  checkTruthiness(values[counter]);
  counter++;
}
