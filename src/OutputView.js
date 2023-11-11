import { Console } from '@woowacourse/mission-utils';
import { OTHER_MESSAGE, OUTPUT_MESSAGE } from './utils/constants.js';

const OutputView = {
  printMenu(menuMessage) {
    Console.print(OUTPUT_MESSAGE.menu);
    Console.print(menuMessage);
    // ...
  },

  printTotalBeforeDiscount(totalMessage) {
    Console.print(OUTPUT_MESSAGE.totalBeforeDiscount);
    Console.print(totalMessage);
  },

  printReward(rewardMessage) {
    Console.print(OUTPUT_MESSAGE.reward);
    Console.print(rewardMessage);
  },

  printBenefit(benefitMessage) {
    Console.print(OUTPUT_MESSAGE.benefit);
    Console.print(benefitMessage);
  },
  // ...
};

export default OutputView;
