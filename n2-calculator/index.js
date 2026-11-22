// Name: Raven Kristian Abarintos
// Section: IV-BSIT C
// Activity: N2
// Date: 2026-11-15

const os = require("os");
const operations = require("./operations");
const formatResult = require("./formatter");

const [operation, ...rawValues] = process.argv.slice(2);
const values = rawValues.map(Number);

if (!operation || values.length === 0 || values.some((value) => !Number.isFinite(value))) {
  console.log("Usage: node index.js <add|subtract|multiply|divide|average> <number> [number ...]");
  process.exitCode = 1;
} else {
  try {
    let result;
    if (operation === "average") {
      result = operations.average(values);
      console.log(`Average of ${values.join(", ")} = ${result}`);
    } else {
      if (values.length !== 2) throw new Error("This operation needs exactly two numbers.");
      const [a, b] = values;
      const available = {
        add: () => operations.add(a, b),
        subtract: () => operations.subtract(a, b),
        multiply: () => operations.multiply(a, b),
        divide: () => operations.divide(a, b)
      };
      if (!available[operation]) throw new Error(`Unknown operation: ${operation}`);
      result = available[operation]();
      const symbols = { add: "+", subtract: "-", multiply: "*", divide: "/" };
      console.log(formatResult(symbols[operation], [a, b], result));
    }
    console.log(`Running on ${os.platform()} (${os.arch()})`);
  } catch (error) {
    console.log("Error:", error.message);
    process.exitCode = 1;
  }
}
