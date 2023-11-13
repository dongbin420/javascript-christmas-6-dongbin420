import { UTIL_STRING, OUTPUT_MESSAGE, NUMBER, OTHER_MESSAGE } from './utils/constants.js';

const MessageGenerator = {
  createIntroMessage(date) {
    const message = `${OUTPUT_MESSAGE.secondIntro1} ${date}${OUTPUT_MESSAGE.secondIntro2}`;

    return message;
  },

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

  createBenefitMessage(benefitList) {
    let benefitMessage = UTIL_STRING.empty;

    if (!benefitList) {
      benefitMessage = `${OUTPUT_MESSAGE.none}${UTIL_STRING.lineBreak}`;

      return benefitMessage;
    }

    Object.entries(benefitList).forEach(([benefit, price]) => {
      if (price !== NUMBER.zero) {
        benefitMessage += `${benefit}: -${price.toLocaleString()}원${UTIL_STRING.lineBreak}`;
      }
    });

    return benefitMessage;
  },

  createTotalBenefitMessage(total) {
    let totalMessage = UTIL_STRING.empty;

    if (total === NUMBER.zero) {
      totalMessage = `${total.toLocaleString()}원${UTIL_STRING.lineBreak}`;

      return totalMessage;
    }

    totalMessage = `-${total.toLocaleString()}원${UTIL_STRING.lineBreak}`;

    return totalMessage;
  },

  createExpectedPaymentMessage(payment) {
    const PAYMENT_MESSAGE = `${payment.toLocaleString()}원${UTIL_STRING.lineBreak}`;

    return PAYMENT_MESSAGE;
  },
};

export default MessageGenerator;
