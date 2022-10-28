export function makeZpdicJson(words: string[], existing?: JSON) {
  return words
    .map((value, index) => {
      return {
        entry: {
          id: index,
          form: value,
        },
      };
    })
    .concat(existing);
}
