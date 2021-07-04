export default {
  methods: {
    capitalizeEachWord(text) {
      const splitTextArr = text.split(' ');
      let formatedText = '';
      if (splitTextArr.length > 1) {
        formatedText = splitTextArr.map((word) => {
          const firstLetter = word.charAt(0);
          return word.replace(firstLetter, firstLetter.toUpperCase());
        }).join(' ');
      } else {
        const firstLetter = text.charAt(0);
        formatedText = text.replace(firstLetter, firstLetter.toUpperCase());
      }
      return formatedText;
    },
    capitalizeFirstLetter(text) {
      return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    },
  },
};
