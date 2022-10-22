import { carryUp } from "./carryUp";

export function spell(value: number, syllable: string[][]) {
  const radixes = syllable.map((value) => value.length);
  const digits = carryUp(value, radixes);
  const result = digits
    .map((value, index) => syllable[index][value])
    .reduce((a, b) => a.concat(b));
  return result;
}
