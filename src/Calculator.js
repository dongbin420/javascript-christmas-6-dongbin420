import { UTIL_STRING, MENU, NUMBER, OTHER_MESSAGE, OUTPUT_MESSAGE } from './utils/constants.js';

class Calculator {
  constructor(dateInput, menuInput) {
    this.userDate = Number(dateInput);
    this.menuList = this.formatMenuInput(menuInput);
    this.totalBeforeDiscount = this.calculateTotalBeforeDiscount();
    this.isReward = this.checkReward();
    this.dDayDiscount = this.calculateDdayEvent();
    this.weekdayDiscount = this.calculateWeekdayEvent();
    this.weekendDiscount = this.calculateWeekendEvent();
    this.specialDayDiscount = this.calculateSpecialEvent();
    this.rewardDiscount = this.calculateRewardEvent();
  }

  formatMenuInput(menuInput) {
    const MENU_LIST = {};

    menuInput.split(UTIL_STRING.comma).forEach((menuWithDash) => {
      const [menu, quantity] = menuWithDash.split(UTIL_STRING.dash);
      MENU_LIST[menu] = Number(quantity);
    });

    return MENU_LIST;
  }

  calculateTotalBeforeDiscount() {
    let total = NUMBER.zero;

    Object.entries(this.menuList).forEach(([menu, quantity]) => {
      const CATEGORY = this.findCategoryForMenu(menu);
      total += MENU[CATEGORY][menu] * quantity;
    });

    return total;
  }

  findCategoryForMenu(menu) {
    let obtainedCategory = UTIL_STRING.empty;
    Object.entries(MENU).forEach(([category, menuItems]) => {
      if (menuItems[menu]) {
        obtainedCategory = category;
      }
    });

    return obtainedCategory;
  }

  checkReward() {
    if (this.totalBeforeDiscount >= NUMBER.basePriceForReward) {
      return true;
    }

    return false;
  }

  calculateDdayEvent() {
    if (this.userDate <= NUMBER.christmasDay) {
      const DAYS_SINCE_STRAT = this.userDate - NUMBER.eventStartDay;

      // 문법 수정 필요
      const DISCOUNT_AMOUNT =
        NUMBER.dDayEventInitialDiscount + DAYS_SINCE_STRAT * NUMBER.dDayEventIncreasePerDay;

      return DISCOUNT_AMOUNT;
    }

    return NUMBER.zero;
  }

  calculateWeekdayEvent() {
    const DAY_OF_WEEK = new Date(2023, NUMBER.december, this.userDate).getDay();
    let discountAmount = NUMBER.zero;

    if (DAY_OF_WEEK >= NUMBER.sunday && DAY_OF_WEEK <= NUMBER.thursday) {
      Object.entries(this.menuList).forEach(([menu, quantity]) => {
        const CATEGORY = this.findCategoryForMenu(menu);

        if (CATEGORY === OTHER_MESSAGE.dessert) {
          discountAmount += NUMBER.dayEventDiscount * quantity;
        }
      });
    }

    return discountAmount;
  }

  calculateWeekendEvent() {
    const DAY_OF_WEEK = new Date(2023, NUMBER.december, this.userDate).getDay();
    let discountAmount = NUMBER.zero;

    if (DAY_OF_WEEK === NUMBER.friday || DAY_OF_WEEK === NUMBER.saturday) {
      Object.entries(this.menuList).forEach(([menu, quantity]) => {
        const CATEGORY = this.findCategoryForMenu(menu);

        if (CATEGORY === OTHER_MESSAGE.mainMenu) {
          discountAmount += NUMBER.dayEventDiscount * quantity;
        }
      });
    }

    return discountAmount;
  }

  calculateSpecialEvent() {
    const IS_EVENT_APPLY = NUMBER.specialDayArr.some((day) => this.userDate === day);

    if (IS_EVENT_APPLY) {
      return NUMBER.specialDayDiscount;
    }

    return NUMBER.zero;
  }

  calculateRewardEvent() {
    if (this.isReward) {
      return NUMBER.champagnePrice;
    }

    return NUMBER.zero;
  }

  checkBenefitCondition() {
    const BENEFIT_PRICES = [
      this.dDayDiscount,
      this.weekdayDiscount,
      this.weekendDiscount,
      this.specialDayDiscount,
      this.rewardDiscount,
    ];
    const ALL_ZERO = BENEFIT_PRICES.every((price) => price === 0);

    const NOT_EVENT_ALLOWED = this.totalBeforeDiscount < NUMBER.basePriceForAllEvent || ALL_ZERO;

    return NOT_EVENT_ALLOWED;
  }

  collectBenefits() {
    const NOT_EVENT_ALLOWED = this.checkBenefitCondition();

    if (NOT_EVENT_ALLOWED) {
      return false;
    }

    const BENEFIT_LIST = {
      [OUTPUT_MESSAGE.dDayDiscount]: this.dDayDiscount,
      [OUTPUT_MESSAGE.weekdayDiscount]: this.weekdayDiscount,
      [OUTPUT_MESSAGE.weekendDiscount]: this.weekendDiscount,
      [OUTPUT_MESSAGE.specialDiscount]: this.specialDayDiscount,
      [OUTPUT_MESSAGE.rewardEvent]: this.rewardDiscount,
    };

    return BENEFIT_LIST;
  }

  calculateTotalBenefit() {
    // 문법 수정 필요
    const TOTAL =
      this.dDayDiscount +
      this.weekdayDiscount +
      this.weekendDiscount +
      this.specialDayDiscount +
      this.rewardDiscount;

    return TOTAL;
  }

  calculateExpectedPayment() {
    // 문법 수정 필요
    const PAYMENT =
      this.totalBeforeDiscount -
      this.dDayDiscount -
      this.weekdayDiscount -
      this.weekendDiscount -
      this.specialDayDiscount;

    return PAYMENT;
  }

  getMenuList() {
    return this.menuList;
  }

  getTotalBeforeDiscount() {
    return this.totalBeforeDiscount;
  }

  getIsReward() {
    return this.isReward;
  }

  getBenefit() {
    const BENEFIT_LIST = this.collectBenefits();

    return BENEFIT_LIST;
  }

  getTotalBenefit() {
    const TOTAL = this.calculateTotalBenefit();

    return TOTAL;
  }

  getExpectedPayment() {
    const PAYMENT = this.calculateExpectedPayment();

    return PAYMENT;
  }
}

export default Calculator;
