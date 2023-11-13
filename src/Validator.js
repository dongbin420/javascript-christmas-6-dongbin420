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

    const MENU_ITSELF = CONVERTED_INPUT.map((menuAndQuan) => menuAndQuan[0]);
    const QUANTITY_ITSELF = CONVERTED_INPUT.map((menuAndQuan) => Number(menuAndQuan[1]));

    Validator.validateMenu(MENU_ITSELF);
    Validator.validateQuantity(QUANTITY_ITSELF);
  },

  validateDate(dateInput) {
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

    return;
  },

  validateFormat(convertedInput) {
    for (let i = 0; i < convertedInput.length; i++) {
      if (convertedInput[i].length !== 2) {
        throw new Error(ERROR_MESSAGE.order);
      }
    }

    return;
  },

  validateMenu(menu) {
    const IS_MENU = menu.every((menu) => {
      return Object.values(MENU).some((category) => Object.hasOwn(category, menu));
    });

    if (!IS_MENU) {
      throw new Error(ERROR_MESSAGE.order);
    }

    const IS_DUPLICATED = new Set(menu).size !== menu.length;

    if (IS_DUPLICATED) {
      throw new Error(ERROR_MESSAGE.order);
    }

    const IS_ALL_DRINK = menu.every((menu) => Object.hasOwn(MENU[OTHER_MESSAGE.drink], menu));

    if (IS_ALL_DRINK) {
      throw new Error(ERROR_MESSAGE.drink);
    }

    return;
  },

  validateQuantity(quantity) {
    for (let j = 0; j < quantity.length; j++) {
      if (Number.isNaN(quantity[j])) {
        throw new Error(ERROR_MESSAGE.order);
      }

      if (quantity[j] < 1) {
        throw new Error(ERROR_MESSAGE.order);
      }

      if (!Number.isInteger(quantity[j])) {
        throw new Error(ERROR_MESSAGE.order);
      }
    }

    const ALL_MENU_QUANTITY = quantity.reduce((acc, cur) => acc + cur);

    if (ALL_MENU_QUANTITY > 20) {
      throw new Error(ERROR_MESSAGE.quantity);
    }

    return;
  },
};
export default Validator;
