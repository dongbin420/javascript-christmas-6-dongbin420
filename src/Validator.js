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

    const QUANTITIES = CONVERTED_INPUT.map((menuAndQuan) => menuAndQuan[1]);
    const MENUS = CONVERTED_INPUT.map((menuAndQuan) => menuAndQuan[0]);

    Validator.validateQuantity(QUANTITIES);
    Validator.validateMenu(MENUS);
  },

  validateDate(dateInput) {
    const CONVERTED_INPUT = Number(dateInput);

    if (
    Number.isNaN(CONVERTED_INPUT) 
    || CONVERTED_INPUT < 1 
    || CONVERTED_INPUT > 31
    ) {
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

    const IS_DUPLICATED = new Set(menus).size !== menus.length;
    const IS_ALL_DRINK = menus.every((menu) => Object.hasOwn(MENU[OTHER_MESSAGE.drink], menu));

    if (!IS_MENU || IS_DUPLICATED) {
      throw new Error(ERROR_MESSAGE.order);
    }

    if (IS_ALL_DRINK) {
      throw new Error(ERROR_MESSAGE.drink);
    }
  },

  validateQuantity(quantities) {
    let totalQuantity = 0;

    for (let j = 0; j < quantities.length; j++) {
      if (Number.isNaN(Number(quantities[j])) || Number(quantities[j]) < 1 || !Number.isInteger(Number(quantities[j]))) {
        throw new Error(ERROR_MESSAGE.order);
      }

      totalQuantity += Number(quantities[j]);
    }

    if (totalQuantity > 20) {
      throw new Error(ERROR_MESSAGE.quantity);
    }
  },
};
export default Validator;
