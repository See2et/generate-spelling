import { carryUp } from "./carryUp";

export function listing(from: number, to: number, syllable: string[][]) {
  const radixes = syllable.map((v) => v.length);
  const maxRadix = radixes.reduce((a, b) => Math.max(a, b));
  const indexOfMaxRadix = radixes.indexOf(maxRadix);
  const removedMaxRadix = radixes
    .slice(0, indexOfMaxRadix)
    .concat(radixes.slice(indexOfMaxRadix + 1, radixes.length));

  const spelling = [...new Array(to)].map((_, i) => {
    const carriedUp = carryUp(i + from, removedMaxRadix);
    console.log(carriedUp);
    carriedUp.splice(indexOfMaxRadix, 0, (i + from) % maxRadix);
    return carriedUp.map((v, i) => syllable[i][v]).join("");
  });
  return spelling;
}
