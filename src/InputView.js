import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './utils/constants.js';

const InputView = {
	async readDate() {
		const input = await Console.readLineAsync(INPUT_MESSAGE.readDate);
		// ...
	},

	async readMenu() {
		const input = await Console.readLineAsync(INPUT_MESSAGE.readMenu);

		return input;
	},
	// ...
};

export default InputView;
