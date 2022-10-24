import { carryUp } from "./carryUp";

export function spell(value: number, syllable: string[][]) {
  const radixes = syllable.map((v) => v.length);
  const digits = carryUp(value, radixes);
  const result = digits.map((v, i) => syllable[i][v]).join("");
  return result;
}
