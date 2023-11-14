import MessageGenerator from '../src/MessageGenerator.js';

describe('도메인 메시지 생성 로직 테스트', () => {
  test.each(['3', '25', '31'])('날짜 입력값에 따른 인트로 메시지', (input) => {
    const message = MessageGenerator.createIntroMessage(input);
    const expectedMessage = `12월 ${input}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`;

    expect(message).toBe(expectedMessage);
  });

  test.each([
    [{ 타파스: 1, 제로콜라: 1 }, '타파스 1개\n제로콜라 1개\n'],
    [
      { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 },
      '티본스테이크 1개\n바비큐립 1개\n초코케이크 2개\n제로콜라 1개\n',
    ],
  ])('주문 메뉴 메시지', (input, result) => {
    const message = MessageGenerator.createMenuMessage(input);
    expect(message).toBe(result);
  });

  test.each([8500, 142000, 109000])('할인 전 총주문 금액 메시지', (input) => {
    const message = MessageGenerator.createTotalBeforeDiscountMessage(input);
    const expectedMessage = `${input.toLocaleString()}원\n`;

    expect(message).toBe(expectedMessage);
  });

  test.each([
    [true, '샴페인 1개\n'],
    [false, '없음\n'],
  ])('증정 메뉴 메시지', (input, result) => {
    const message = MessageGenerator.createRewardMessage(input);

    expect(message).toBe(result);
  });

  test.each([
    [
      {
        '크리스마스 디데이 할인': 1200,
        '평일 할인': 4046,
        '주말 할인': 0,
        '특별 할인': 1000,
        '증정 이벤트': 25000,
      },
      '크리스마스 디데이 할인: -1,200원\n평일 할인: -4,046원\n특별 할인: -1,000원\n증정 이벤트: -25,000원\n',
    ],
    [false, '없음\n'],
  ])('혜택 내역 메시지', (input, result) => {
    const message = MessageGenerator.createBenefitMessage(input);

    expect(message).toBe(result);
  });

  test.each([
    [31246, '-31,246원\n'],
    [0, '0원\n'],
  ])('총 혜택 금액 메시지', (input, result) => {
    const message = MessageGenerator.createTotalBenefitMessage(input);

    expect(message).toBe(result);
  });

  test.each([135754, 8500, 5000, 109000])('할인 후 예상 결제 금액 메시지', (input) => {
    const message = MessageGenerator.createTotalBenefitMessage(input);
    const expectedMessage = `-${input.toLocaleString()}원\n`;

    expect(message).toBe(expectedMessage);
  });
});
