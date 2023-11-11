import { UTIL_STRING, OUTPUT_MESSAGE } from './utils/constants.js';

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

  createRewardMessage(isReward) {
    let rewardMessage = UTIL_STRING.empty;

    if (isReward) {
      rewardMessage = `${OUTPUT_MESSAGE.champagne}${UTIL_STRING.lineBreak}`;

      return rewardMessage;
    }

    rewardMessage = `${OUTPUT_MESSAGE.none}${UTIL_STRING.lineBreak}`;

    return rewardMessage;
  },
};

export default MessageGenerator;
