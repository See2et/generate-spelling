export function makeZpdicJson(words: string[]) {
  [...new Array(words.length)].map((value, index) => {
    return {
      entry: {
        id: index,
        form: value,
      },
    };
  });
}
