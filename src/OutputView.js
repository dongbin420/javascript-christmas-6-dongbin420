import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './utils/constants.js';

const OutputView = {
	printMenu(message) {
		Console.print(OUTPUT_MESSAGE.menu);
		Console.print(message);
		// ...
	},
	// ...
};

export default OutputView;
