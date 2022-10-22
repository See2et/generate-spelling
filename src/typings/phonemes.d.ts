export interface PhonemesData {
  vowels: string[];
  conses: string[];
}

declare module "~/../data/phonemes.json" {
  const data: PhonemesData;

  export default data;
}
