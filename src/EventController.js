import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Calculator from './Calculator.js';
import MessageGenerator from './MessageGenerator.js';

class EventController {
  constructor() {
    this.dateInput = null;
    this.menuInput = null;
    this.calculator = null;
  }

  async start() {
    await this.getUserInput();

    this.setCalculator();

    this.printAllOutputs();
  }

  async getUserInput() {
    this.dateInput = await InputView.readDate();
    this.menuInput = await InputView.readMenu();
  }

  setCalculator() {
    this.calculator = new Calculator(this.dateInput, this.menuInput);
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

  printBenefit() {
    const BENEFIT_LIST = this.calculator.getBenefit();
    const BENEFIT_MESSAGE = MessageGenerator.createBenefitMessage(BENEFIT_LIST);

    OutputView.printBenefit(BENEFIT_MESSAGE);
  }

  printTotalBenefit() {
    const TOTAL = this.calculator.getTotalBenefit();
    const TOTAL_MESSAGE = MessageGenerator.createTotalBenefitMessage(TOTAL);

    OutputView.printTotalBenefit(TOTAL_MESSAGE);
  }

  printAllOutputs() {
    this.printMenu();
    this.printTotalBeforeDiscount();
    this.printReward();
    this.printBenefit();
    this.printTotalBenefit();
  }
}

export default EventController;
