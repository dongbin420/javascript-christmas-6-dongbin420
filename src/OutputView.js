import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './utils/constants.js';

const OutputView = {
	printMenu(menuMessage) {
		Console.print(OUTPUT_MESSAGE.menu);
		Console.print(menuMessage);
		// ...
	},
	// ...
};

export default OutputView;
