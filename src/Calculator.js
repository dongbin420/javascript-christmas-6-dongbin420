import { UTIL_STRING } from "./utils/constants.js";

class Calculator {
  constructor(menuInput) {
    this.menuList = this.formatMenuInput(menuInput);
  }

  formatMenuInput(menuInput) {
    const MENU_LIST = {};

    menuInput.split(UTIL_STRING.comma).forEach((menuWithDash) => {
			const [menu, quantity] = menuWithDash.split(UTIL_STRING.dash);
      MENU_LIST[menu] = Number(quantity);
		});

    return MENU_LIST;
  }

  createMenuMessage() {
    let message = UTIL_STRING.empty;
    
    Object.entries(this.menuList).forEach(([menu, quantity]) => {
      message += `${menu} ${quantity}개${UTIL_STRING.lineBreak}`
    })

    return message;
  }
}

export default Calculator;