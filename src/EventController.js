import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MessageGenerator from './MessageGenerator.js';

class EventController {
	constructor() {
		this.menuInput = null;
	}

	async start() {
		this.menuInput = await InputView.readMenu();
		const MENU_MESSAGE = MessageGenerator.generateOrderList(this.menuInput);
		OutputView.printMenu(MENU_MESSAGE);
	}
}

export default EventController;
