export function makeZpdicJson(words: string[]) {
  return words.map((value, index) => {
    return {
      entry: {
        id: index,
        form: value,
      },
    };
  });
}
