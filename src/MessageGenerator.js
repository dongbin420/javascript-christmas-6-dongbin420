import { UTIL_STRING } from './utils/constants.js';

const MessageGenerator = {
  createMenuMessage(menuList) {
    let message = UTIL_STRING.empty;

    Object.entries(menuList).forEach(([menu, quantity]) => {
      message += `${menu} ${quantity}개${UTIL_STRING.lineBreak}`;
    });

    return message;
  },

  createTotalBeforeDiscountMessage(total) {
    const TOTAL_MESSAGE = `${total.toLocaleString()}원${UTIL_STRING.lineBreak}`;

    return TOTAL_MESSAGE;
  },
};

export default MessageGenerator;
