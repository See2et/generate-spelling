import { carryUp } from "./carryUp";
import { numArrayToString } from "./numArrayToString";

export function listing(value: number, syllable: string[][]) {
  const radixes = syllable.map((value) => value.length);
  const maxRadix = radixes.reduce((a, b) => Math.max(a, b));
  const indexOfMaxRadix = radixes.indexOf(maxRadix);
  const removedMaxRadix = radixes.slice(indexOfMaxRadix + 1);

  const spellingNum = [...new Array(value)].map((v, i) => {
    const carriedUp = carryUp(i, removedMaxRadix);
    const spliced = carriedUp.splice(indexOfMaxRadix, 0, i % maxRadix);
    return carriedUp;
  });
  const spelling = spellingNum.map((v, i) => {
    const result = numArrayToString(v, syllable);
    return result;
  });
  return spelling;
}

/*export function listing(value: number, syllable: string[][]) {
  const radixes = syllable.map((value) => value.length);
  const maxRadix = radixes.reduce((a, b) => Math.max(a, b));
  const maxIndex = radixes.indexOf(maxRadix);
  console.log("radixes", radixes);
  console.log("maxRadiex:", maxRadix);
  console.log("index:", maxIndex);

  const removedMaxRadix = radixes
    .slice(0, maxIndex - 1)
    .concat(radixes.slice(maxIndex));
  console.log("removedMaxRadix:", removedMaxRadix);

  const arrayOfDigits = [...Array(value)].map((value, index) => {
    const checksome = index % maxRadix;
    const digits = carryUp(index, removedMaxRadix);
    const result = digits.splice(maxIndex, 0, checksome);
    console.log("index:", index);
    console.log("checksome:", checksome);
    console.log("digits:", digits);
    console.log("result:", result);
    return result;
  });
  console.log("arrayOfDigits:", arrayOfDigits);

  const spelling = arrayOfDigits.map((digits) => {
    const result = digits
      .map((value, index) => syllable[index][value])
      .reduce((a, b) => a.concat(b));
  });
  console.log("spelling:", spelling);

  return spelling;
}*/
