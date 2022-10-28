export function carryUp(value: number, radixes: number[]) {
  if (value >= radixes.reduce((a, b) => a * b))
    throw new TypeError("this value is too large");
  const digits = radixes
    .slice(0)
    .reverse()
    .map((radix) => {
      const digit = value % radix;
      value -= digit;
      value /= radix;
      return digit;
    })
    .reverse();
  return digits;
}
