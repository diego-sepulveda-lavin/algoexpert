const decimalNumber = 11; // 1010

function decimalToBinary(decNumber: number): string {
  let output = "";
  if (decNumber === 0) return "0";
  while (decNumber > 0) {
    let remainder = decNumber % 2;
    output = remainder + output;
    decNumber = Math.floor(decNumber / 2);
  }
  return output;
}
console.log(decimalToBinary(decimalNumber));
