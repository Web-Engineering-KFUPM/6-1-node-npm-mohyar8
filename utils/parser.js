import _ from "lodash";

export function parseNumbers(input) {
  const nums = _.map(input, (str) => Number(str));
  // keep 0 as a valid number; only drop NaN
  return _.filter(nums, (n) => !Number.isNaN(n));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
