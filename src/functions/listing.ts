import { carryUp } from "./carryUp";
import { numArrayToString } from "./numArrayToString";

export function listing(from: number, to: number, syllable: string[][]) {
  const radixes = syllable.map((v) => v.length);
  const maxRadix = radixes.reduce((a, b) => Math.max(a, b));
  const indexOfMaxRadix = radixes.indexOf(maxRadix);
  const removedMaxRadix = radixes.slice(indexOfMaxRadix + 1);

  const spellingNum = [...new Array(to)].map((_, i) => {
    const carriedUp = carryUp(i + from, removedMaxRadix);
    const spliced = carriedUp.splice(indexOfMaxRadix, 0, (i + from) % maxRadix);
    return carriedUp;
  });
  const spelling = spellingNum.map((v) => {
    const result = numArrayToString(v, syllable);
    return result;
  });
  return spelling;
}
