import { ERROR_MESSAGE, UTIL_STRING, MENU, OTHER_MESSAGE } from './utils/constants.js';

const Validator = {
  validateDateInput(dateInput) {
    Validator.validateDate(dateInput);
  },

  validateMenuInput(menuInput) {
    const CONVERTED_INPUT = menuInput
      .split(UTIL_STRING.comma)
      .map((menuAndQuan) => menuAndQuan.split(UTIL_STRING.dash));

    Validator.validateFormat(CONVERTED_INPUT);

    const QUANTITIES = CONVERTED_INPUT.map((menuAndQuan) => Number(menuAndQuan[1]));
    const MENUS = CONVERTED_INPUT.map((menuAndQuan) => menuAndQuan[0]);

    Validator.validateQuantity(QUANTITIES);
    Validator.validateMenu(MENUS);
  },

  validateDate(dateInput) {
    const CONVERTED_INPUT = Number(dateInput);

    if (Number.isNaN(CONVERTED_INPUT) || CONVERTED_INPUT < 1 || CONVERTED_INPUT > 31) {
      throw new Error(ERROR_MESSAGE.date);
    }

    if (!Number.isInteger(CONVERTED_INPUT)) {
      throw new Error(ERROR_MESSAGE.dateInteger);
    }
  },

  validateFormat(convertedInput) {
    for (let i = 0; i < convertedInput.length; i++) {
      if (convertedInput[i].length !== 2) {
        throw new Error(ERROR_MESSAGE.order);
      }
    }
  },

  validateMenu(menus) {
    const IS_MENU = menus.every((menu) => {
      return Object.values(MENU).some((category) => Object.hasOwn(category, menu));
    });

    if (!IS_MENU) {
      throw new Error(ERROR_MESSAGE.order);
    }

    const IS_DUPLICATED = new Set(menus).size !== menus.length;

    if (IS_DUPLICATED) {
      throw new Error(ERROR_MESSAGE.order);
    }

    const IS_ALL_DRINK = menus.every((menu) => Object.hasOwn(MENU[OTHER_MESSAGE.drink], menu));

    if (IS_ALL_DRINK) {
      throw new Error(ERROR_MESSAGE.drink);
    }
  },

  validateQuantity(quantities) {
    for (let j = 0; j < quantities.length; j++) {
      if (Number.isNaN(quantities[j])) {
        throw new Error(ERROR_MESSAGE.order);
      }

      if (quantities[j] < 1) {
        throw new Error(ERROR_MESSAGE.order);
      }

      if (!Number.isInteger(quantities[j])) {
        throw new Error(ERROR_MESSAGE.order);
      }
    }

    const TOTAL_QUANTITY = quantities.reduce((acc, cur) => acc + cur);

    if (TOTAL_QUANTITY > 20) {
      throw new Error(ERROR_MESSAGE.quantity);
    }
  },
};
export default Validator;
