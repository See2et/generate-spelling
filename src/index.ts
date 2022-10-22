import phonemes from "../data/phonemes.json";
import { spell } from "./functions/spell";

console.log(
  spell(50, [
    phonemes.conses,
    phonemes.vowels,
    phonemes.conses,
    phonemes.vowels,
  ])
);
