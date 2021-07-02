export default {
  methods: {
    capitalizeEachWord(text) {
      const splitArr = text.split(' ');
      let formatedText = '';
      if (splitArr.length > 1) {
        formatedText = splitArr.map((word) => {
          const firstLetter = word.charAt(0);
          return word.replace(firstLetter, firstLetter.toUpperCase());
        }).join(' ');
      } else {
        const firstLetter = text.charAt(0);
        formatedText = text.replace(firstLetter, firstLetter.toUpperCase());
      }
      return formatedText;
    },
  },
};
