import * as fs from "fs";

export function makeCsvFile(
  dir: string,
  array: string[],
  collum?: string
): void {
  if (collum) array.unshift(collum);
  const csv = array
    .map((value, index) => {
      return (value = `${index}, ${value} \n`);
    })
    .join("");
  fs.writeFileSync(dir, csv);
}
