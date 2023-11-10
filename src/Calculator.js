import { UTIL_STRING, MENU, NUMBER } from './utils/constants.js';

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
			message += `${menu} ${quantity}개${UTIL_STRING.lineBreak}`;
		});

		return message;
	}

	createTotalBeforeDiscountMessage() {
		let total = NUMBER.zero;

		Object.entries(this.menuList).forEach(([menu, quantity]) => {
			const CATEGORY = this.getCategoryForMenu(menu);
			total += MENU[CATEGORY][menu] * quantity;
		});

		const TOTAL_MESSAGE = `${total.toLocaleString()}원${UTIL_STRING.lineBreak}`;

		return TOTAL_MESSAGE;
	}

	getCategoryForMenu(menu) {
		let obtainedCategory = UTIL_STRING.empty;
		Object.entries(MENU).forEach(([category, menuItems]) => {
			if (menuItems[menu]) {
				categoryFound = category;
			}
		});
		return obtainedCategory;
	}
}

export default Calculator;
