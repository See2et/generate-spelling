import * as fs from "fs";

export function makeJsonFile(obj: object, dir: string): void {
  fs.writeFileSync(dir, JSON.stringify(obj));
}
