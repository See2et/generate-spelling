import * as fs from "fs";

export function makeJsonFile(dir: string, obj: object): void {
  fs.writeFileSync(dir, JSON.stringify(obj));
}
