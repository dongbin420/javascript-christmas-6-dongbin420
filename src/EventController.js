import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Calculator from './Calculator.js';

class EventController {
	constructor() {
		this.menuInput = null;
		this.calculator = null;
	}

	async start() {
		await this.getMenuInput();
	}

	async getMenuInput() {
		this.menuInput = await InputView.readMenu();

		this.setCalculator();
	}

	setCalculator() {
		this.calculator = new Calculator(this.menuInput);

		this.printMenu();
	}

	printMenu() {
		const MENU_MESSAGE = this.calculator.createMenuMessage();

		OutputView.printMenu(MENU_MESSAGE);
	}
}

export default EventController;
