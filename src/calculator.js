export function addition(a, b) {
  return a + b;
}
export function subtraction(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divison(a, b) {
  if (b === 0) throw new Error("Divison by Zero");

  return a / b;
}
