import { UTIL_STRING } from './utils/constants.js';

const MessageGenerator = {
	generateOrderList(menuInput) {
		let message = UTIL_STRING.empty;

		menuInput.split(UTIL_STRING.comma).forEach((menuWithDash) => {
			const [menu, quantity] = menuWithDash.split(UTIL_STRING.dash);
			message += `${menu} ${quantity}개${UTIL_STRING.lineBreak}`;
		});

		return message;
	},
};

export default MessageGenerator;
