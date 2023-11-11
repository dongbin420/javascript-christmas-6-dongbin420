import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Calculator from './Calculator.js';
import MessageGenerator from './MessageGenerator.js';

class EventController {
  constructor() {
    this.menuInput = null;
    this.calculator = null;
  }

  async start() {
    await this.getMenuInput();

    this.setCalculator();

    this.printMenu();

    this.printTotalBeforeDiscount();

    this.printReward();
  }

  async getMenuInput() {
    this.menuInput = await InputView.readMenu();
  }

  setCalculator() {
    this.calculator = new Calculator(this.menuInput);
  }

  printMenu() {
    const MENU_LIST = this.calculator.getMenuList();
    const MENU_MESSAGE = MessageGenerator.createMenuMessage(MENU_LIST);

    OutputView.printMenu(MENU_MESSAGE);
  }

  printTotalBeforeDiscount() {
    const TOTAL = this.calculator.getTotalBeforeDiscount();
    const TOTAL_MESSAGE = MessageGenerator.createTotalBeforeDiscountMessage(TOTAL);

    OutputView.printTotalBeforeDiscount(TOTAL_MESSAGE);
  }

  printReward() {
    const IS_REWARD = this.calculator.getIsReward();
    const REWARD_MESSAGE = MessageGenerator.createRewardMessage(IS_REWARD);

    OutputView.printReward(REWARD_MESSAGE);
  }
}

export default EventController;
