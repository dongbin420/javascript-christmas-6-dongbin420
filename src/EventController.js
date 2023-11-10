import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Calculator from './Calculator.js';

class EventController {
	constructor() {
		this.menuInput = null;
		this.calculator = null;
	}

	async start() {
		this.menuInput = await InputView.readMenu();
		this.calculator = new Calculator(this.menuInput);
		const MENU_MESSAGE = this.calculator.createMenuMessage();
		OutputView.printMenu(MENU_MESSAGE);
	}
}

export default EventController;
