import { UTIL_STRING, MENU, NUMBER, OTHER_MESSAGE, OUTPUT_MESSAGE } from './utils/constants.js';

class Calculator {
  constructor(dateInput, menuInput) {
    this.userDate = Number(dateInput);
    this.menuList = this.formatMenuInput(menuInput);
    this.totalBeforeDiscount = this.calculateTotalBeforeDiscount();
    this.isNotEventAllowed = this.checkEventCondition();
    this.isReward = this.checkReward();
    this.dDayDiscount = this.calculateDdayEvent();
    this.weekdayDiscount = this.calculateWeekdayEvent();
    this.weekendDiscount = this.calculateWeekendEvent();
    this.specialDayDiscount = this.calculateSpecialEvent();
    this.rewardDiscount = this.calculateRewardEvent();
    this.totalBenefit = this.calculateTotalBenefit();
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

  checkEventCondition() {
    const NOT_EVENT_ALLOWED = this.totalBeforeDiscount < NUMBER.basePriceForAllEvent;

    return NOT_EVENT_ALLOWED;
  }

  checkReward() {
    if (this.totalBeforeDiscount >= NUMBER.basePriceForReward) {
      return true;
    }

    return false;
  }

  calculateDdayEvent() {
    if (this.isNotEventAllowed) {
      return NUMBER.zero;
    }

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
    if (this.isNotEventAllowed) {
      return NUMBER.zero;
    }

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
    if (this.isNotEventAllowed) {
      return NUMBER.zero;
    }

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
    if (this.isNotEventAllowed) {
      return NUMBER.zero;
    }

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

  collectBenefits() {
    if (this.totalBenefit === 0) {
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

  calculateBadgeEvent() {
    if (this.totalBenefit >= NUMBER.basePriceForSanta) {
      return OUTPUT_MESSAGE.santa;
    }

    if (this.totalBenefit >= NUMBER.basePriceForTree) {
      return OUTPUT_MESSAGE.tree;
    }

    if (this.totalBenefit >= NUMBER.basePriceForStar) {
      return OUTPUT_MESSAGE.star;
    }

    return OUTPUT_MESSAGE.none;
  }

  getEvent() {
    const MENU_LIST = this.menuList;
    const TOTAL_BEFORE_DISCOUNT = this.totalBeforeDiscount;
    const IS_REWARD = this.isReward;
    const BENEFIT_LIST = this.collectBenefits();
    const TOTAL_BENEFIT = this.totalBenefit;
    const PAYMENT = this.calculateExpectedPayment();
    const BADGE = this.calculateBadgeEvent();

    return {
      MENU_LIST,
      TOTAL_BEFORE_DISCOUNT,
      IS_REWARD,
      BENEFIT_LIST,
      TOTAL_BENEFIT,
      PAYMENT,
      BADGE,
    };
  }
}

export default Calculator;
