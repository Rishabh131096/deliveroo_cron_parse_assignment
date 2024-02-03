const DEFAULT_RANGE = require("./constants");

function getRange(rangeParameter, type) {
  let range = DEFAULT_RANGE[type],
    step = 1;
  let times = [];

  if (rangeParameter.indexOf("/") !== -1) {
    const stepParam = rangeParameter.split("/");
    step = parseInt(stepParam[1]);
    rangeParameter = stepParam[0];
  }

  if (rangeParameter.indexOf("-") !== -1) {
    range = rangeParameter.split("-");
  } else if (rangeParameter !== "*") {
    range = [rangeParameter, rangeParameter];
  }

  if (
    parseInt(range[0]) < DEFAULT_RANGE[type][0] ||
    parseInt(range[1]) > DEFAULT_RANGE[type][1]
  ) {
    console.log(
      `${type} :: input - ${range} :: allowed - ${DEFAULT_RANGE[type]}`
    );
    throw "Invalid Cron Paramters";
  }

  for (let i = parseInt(range[0]); i <= parseInt(range[1]); i += step) {
    times.push(i);
  }

  return times;
}

function generateField(cronField) {
  const cronFields = cronField.expr.split(",");
  const ranges = cronFields.map((cronF) => {
    return getRange(cronF, cronField.type);
  });

  let retRange = [];
  for (const range of ranges) {
    retRange.push(...range);
  }
  retRange.sort(function (a, b) {
    return a - b;
  });
  return retRange;
}

module.exports = generateField;
