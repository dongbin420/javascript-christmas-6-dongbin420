import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Calculator from '../domain/Calculator.js';
import MessageGenerator from '../MessageGenerator.js';

class EventController {
  constructor() {
    this.dateInput = null;
    this.menuInput = null;
    this.calculator = null;
    this.event = null;
  }

  async start() {
    OutputView.printIntro();

    await this.getUserInput();

    OutputView.printSecondIntro();

    this.setCalculator();

    this.printResult();
  }

  async getUserInput() {
    this.dateInput = await InputView.readDate();
    this.menuInput = await InputView.readMenu();
  }

  setCalculator() {
    this.calculator = new Calculator(this.dateInput, this.menuInput);
    this.event = this.calculator.getEvent();
  }

  printMenu() {
    const MENU_LIST = this.event.MENU_LIST;
    const MENU_MESSAGE = MessageGenerator.createMenuMessage(MENU_LIST);

    OutputView.printMenu(MENU_MESSAGE);
  }

  printTotalBeforeDiscount() {
    const TOTAL = this.event.TOTAL_BEFORE_DISCOUNT;
    const TOTAL_MESSAGE = MessageGenerator.createTotalBeforeDiscountMessage(TOTAL);

    OutputView.printTotalBeforeDiscount(TOTAL_MESSAGE);
  }

  printReward() {
    const IS_REWARD = this.event.IS_REWARD;
    const REWARD_MESSAGE = MessageGenerator.createRewardMessage(IS_REWARD);

    OutputView.printReward(REWARD_MESSAGE);
  }

  printBenefit() {
    const BENEFIT_LIST = this.event.BENEFIT_LIST;
    const BENEFIT_MESSAGE = MessageGenerator.createBenefitMessage(BENEFIT_LIST);

    OutputView.printBenefit(BENEFIT_MESSAGE);
  }

  printTotalBenefit() {
    const TOTAL = this.event.TOTAL_BENEFIT;
    const TOTAL_MESSAGE = MessageGenerator.createTotalBenefitMessage(TOTAL);

    OutputView.printTotalBenefit(TOTAL_MESSAGE);
  }

  printExpectedPayment() {
    const PAYMENT = this.event.PAYMENT;
    const PAYMENT_MESSAGE = MessageGenerator.createExpectedPaymentMessage(PAYMENT);

    OutputView.printExpectedPayment(PAYMENT_MESSAGE);
  }

  printBadge() {
    const BADGE = this.event.BADGE;

    OutputView.printBadge(BADGE);
  }

  printResult() {
    this.printMenu();
    this.printTotalBeforeDiscount();
    this.printReward();
    this.printBenefit();
    this.printTotalBenefit();
    this.printExpectedPayment();
    this.printBadge();
  }
}

export default EventController;
