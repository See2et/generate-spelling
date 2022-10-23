export function numArrayToString(array: number[], syllable: string[][]) {
  return array.map((v, i) => syllable[i][v]).join("");
}
