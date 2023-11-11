import { UTIL_STRING, MENU, NUMBER, OTHER_MESSAGE } from './utils/constants.js';

class Calculator {
  constructor(dateInput, menuInput) {
    this.userDate = Number(dateInput);
    this.menuList = this.formatMenuInput(menuInput);
    this.totalBeforeDiscount = this.formatTotalBeforeDiscount();
    this.isReward = this.checkReward();
    this.dDayDiscount = this.calculateDdayEvent();
    this.weekdayDiscount = this.calculateWeekdayEvent();
    this.weekendDiscount = this.calculateWeekendEvent();
  }

  formatMenuInput(menuInput) {
    const MENU_LIST = {};

    menuInput.split(UTIL_STRING.comma).forEach((menuWithDash) => {
      const [menu, quantity] = menuWithDash.split(UTIL_STRING.dash);
      MENU_LIST[menu] = Number(quantity);
    });

    return MENU_LIST;
  }

  formatTotalBeforeDiscount() {
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
          discountAmount += NUMBER.weekDayEventDiscount * quantity;
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

  collectBenefits() {}

  getMenuList() {
    return this.menuList;
  }

  getTotalBeforeDiscount() {
    return this.totalBeforeDiscount;
  }

  getIsReward() {
    return this.isReward;
  }

  getBenefits() {}
}

export default Calculator;
