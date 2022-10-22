import { multiply } from "./multiply";

export function carryUp(value: number, radixes: number[]) {
  if (!Array.isArray(radixes)) throw new TypeError("radixes must be an array");
  if (value >= radixes.reduce(multiply))
    throw new TypeError("this value is too large");
  const digits = radixes
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
