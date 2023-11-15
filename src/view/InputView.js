import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants.js';
import Validator from '../Validator.js';

const InputView = {
  async readDate() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT_MESSAGE.readDate);
        Validator.validateDateInput(input);

        return input;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async readMenu() {
    while (true) {
      try {
        const input = await Console.readLineAsync(`${INPUT_MESSAGE.readMenu}${INPUT_MESSAGE.attention}`);
        Validator.validateMenuInput(input);

        return input;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
