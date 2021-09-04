export default {
  methods: {
    validateAlphabetCharacters(value) {
      const regex = /^[a-zA-Z]{2,80}$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    },

    validateEmail(value) {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    },

    validatePhoneNumbers(value) {
      const regex = /^\+?([0-9]+)\)?[-. ]?([0-9]+)[-. ]?([0-9]+)$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    },

    validateNumbers(value) {
      const regex = /^[0-9]+$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    },

    validateLongText(value) {
      const regex = /^\w+/;
      if (value.length > 0 && !regex.test(value)) {
        return false;
      }
      return true;
    },
  },
};
