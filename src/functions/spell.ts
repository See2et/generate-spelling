import { carryUp } from "./carryUp";
import { numArrayToString } from "./numArrayToString";

export function spell(value: number, syllable: string[][]) {
  const radixes = syllable.map((value) => value.length);
  const digits = carryUp(value, radixes);
  const result = numArrayToString(digits, syllable);
  return result;
}
