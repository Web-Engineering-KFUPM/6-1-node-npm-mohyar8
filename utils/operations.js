export function add(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  const [first, ...rest] = numbers;
  return rest.reduce((acc, n) => acc - n, first);
}

export function multiply(numbers) {
  if (numbers.length === 0) return 1;
  return numbers.reduce((acc, n) => acc * n, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return NaN;
  const [first, ...rest] = numbers;
  if (rest.some((n) => n === 0)) {
    return "Error: Division by zero";
  }
  return rest.reduce((acc, n) => acc / n, first);
}
