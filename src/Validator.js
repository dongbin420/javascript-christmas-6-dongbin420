import { ERROR_MESSAGE } from './utils/constants.js';

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
};
export default Validator;
