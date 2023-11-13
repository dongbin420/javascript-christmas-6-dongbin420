import { ERROR_MESSAGE, UTIL_STRING, MENU, OTHER_MESSAGE } from './utils/constants.js';

const Validator = {
  validateDateInput(dateInput) {
    const CONVERTED_INPUT = Number(dateInput);

    if (Number.isNaN(CONVERTED_INPUT)) {
      throw new Error(ERROR_MESSAGE.date);
    }

    if (CONVERTED_INPUT < 1 || CONVERTED_INPUT > 31) {
      throw new Error(ERROR_MESSAGE.date);
    }

    if (!Number.isInteger(CONVERTED_INPUT)) {
      throw new Error(ERROR_MESSAGE.dateInteger);
    }

    return true;
  },

  validateMenuInput(menuInput) {
    const CONVERTED_INPUT = menuInput
      .split(UTIL_STRING.comma)
      .map((menuAndQuan) => menuAndQuan.split(UTIL_STRING.dash));

    Validator.validateFormat(CONVERTED_INPUT);
  },

  validateFormat(convertedInput) {
    for (let i = 0; i < convertedInput.length; i++) {
      if (convertedInput[i].length !== 2) {
        throw new Error(ERROR_MESSAGE.order);
      }
    }

    return;
  },
};
export default Validator;
