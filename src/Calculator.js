import { UTIL_STRING, MENU, NUMBER } from './utils/constants.js';

class Calculator {
  constructor(menuInput) {
    this.menuList = this.formatMenuInput(menuInput);
    this.totalBeforeDiscount = this.formatTotalBeforeDiscount();
    this.isReward = this.checkReward();
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

  getMenuList() {
    return this.menuList;
  }

  getTotalBeforeDiscount() {
    return this.totalBeforeDiscount;
  }

  getIsReward() {
    return this.isReward;
  }
}

export default Calculator;
