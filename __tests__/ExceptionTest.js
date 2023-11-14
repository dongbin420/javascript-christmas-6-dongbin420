import Validator from '../src/Validator.js';

describe('예외 테스트', () => {
  test.each(['a', '0', '-2', '32', '0.2'])('날짜 입력값 예외 테스트', (input) => {
    expect(() => {
      Validator.validateDateInput(input);
    }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  });

  test.each(['티본스테이크', '티본스테이크1,아이스크림1', '티본스테이크-1&아이스크림-1'])(
    '메뉴 입력값 형식 테스트',
    (input) => {
      expect(() => {
        Validator.validateFormat(input);
      }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  );

  test.each([[['티본스테이크', '마라탕']], [['티본스테이크', '티본스테이크']]])(
    '메뉴 유효성 테스트',
    (input) => {
      expect(() => {
        Validator.validateMenu(input);
      }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  );

  test.each([[['제로콜라', '레드와인']], [['레드와인', '샴페인']]])(
    '메뉴가 오직 음료만을 포함하고 있는지 여부 확인',
    (input) => {
      expect(() => {
        Validator.validateMenu(input);
      }).toThrow('[ERROR] 음료만 주문 시, 주문이 불가능 합니다. 다시 입력해 주세요.');
    }
  );

  test.each(['a', '0', '-1', '0.2'])('수량 입력값 예외 테스트', (input) => {
    expect(() => {
      Validator.validateQuantity(input);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
});
