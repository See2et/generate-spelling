declare module "~/../data/phonemes.json" {
  interface PhonemesData {
    vowels: string[];
    conses: string[];
  }

  const data: PhonemesData;

  export default data;
}
