import { carryUp } from "./carryUp";
import { concat } from "./concat";

export function spell(value: number, syllable: string[][]) {
  const radixes = syllable.map((value) => value.length);
  console.log("radixes:", radixes);
  const digits = carryUp(value, radixes);
  const result = digits
    .map((value, index) => syllable[index][value])
    .reduce(concat);
  return result;
}
