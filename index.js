const generateField = require("./fieldGenerators/index");

/////////////////////////////////////////////////////////////////////
// Get the cron parameters
const cronString = process.argv[2];
const cronFields = cronString.split(" ");

// Create an object that would define the type of field
let cron = [
  {
    type: "minute",
    expr: cronFields[0],
  },
  {
    type: "hour",
    expr: cronFields[1],
  },
  {
    type: "day",
    expr: cronFields[2],
  },
  {
    type: "month",
    expr: cronFields[3],
  },
  {
    type: "dayOfWeek",
    expr: cronFields[4],
  },
];

// We call the same function for each parameter
cron = cron.map(generateField);

// This will be the output object
cronOutput = [
  { fieldName: "minute", range: cron[0] },
  { fieldName: "hour", range: cron[1] },
  { fieldName: "day of month", range: cron[2] },
  { fieldName: "month", range: cron[3] },
  { fieldName: "day of week", range: cron[4] },
];

for (const output of cronOutput) {
  console.log(output.fieldName.padEnd(14), output.range.join(" "));
}
console.log("command".padEnd(14), cronFields[5]);
