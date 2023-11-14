import Calculator from '../src/domain/Calculator.js';

describe('도메인 로직 테스트', () => {
  test.each([
    ['타파스-1,제로콜라-1', { 타파스: 1, 제로콜라: 1 }],
    [
      '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1',
      { 티본스테이크: 1, 바비큐립: 1, 초코케이크: 2, 제로콜라: 1 },
    ],
  ])('사용자가 입력한 메뉴와 개수를 객체를 이용해 리스트로 만들어야 한다.', (input, result) => {
    const calculator = new Calculator(undefined, input);
    const menuList = calculator.getEvent().MENU_LIST;
    expect(menuList).toEqual(result);
  });

  test.each([
    ['타파스-1,제로콜라-1', 8500],
    ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1', 142000],
  ])('사용자가 입력한 메뉴의 금액의 합을 할인을 적용하기 전 가격으로 계산', (input, result) => {
    const calculator = new Calculator(undefined, input);
    const totalBeforeDiscount = calculator.getEvent().TOTAL_BEFORE_DISCOUNT;
    expect(totalBeforeDiscount).toBe(result);
  });

  test.each([
    ['타파스-1,제로콜라-1', false],
    ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1', true],
  ])('메뉴의 금액의 합이 12만원이 넘을 경우를 기준으로 증정 이벤트 여부 리턴', (input, result) => {
    const calculator = new Calculator(undefined, input);
    const isReward = calculator.getEvent().IS_REWARD;
    expect(isReward).toEqual(result);
  });

  test.each([
    ['타파스-1,제로콜라-1', false],
    [
      '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1',
      {
        '크리스마스 디데이 할인': 1200,
        '평일 할인': 4046,
        '주말 할인': 0,
        '특별 할인': 1000,
        '증정 이벤트': 25000,
      },
    ],
  ])('메뉴와 방문날짜 그리고 각 이벤트의 조건에 따라 혜택 내역 계산', (input, result) => {
    const calculator = new Calculator('3', input);
    const benefitList = calculator.getEvent().BENEFIT_LIST;
    expect(benefitList).toEqual(result);
  });

  test.each([
    ['타파스-1,제로콜라-1', 0],
    ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1', 31246],
  ])('총 혜택 금액 리턴', (input, result) => {
    const calculator = new Calculator('3', input);
    const totalBenefit = calculator.getEvent().TOTAL_BENEFIT;
    expect(totalBenefit).toEqual(result);
  });

  test.each([
    ['타파스-1,제로콜라-1', 8500],
    ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1', 135754],
  ])('할인 후 예상 결제 금액 리턴', (input, result) => {
    const calculator = new Calculator('3', input);
    const payment = calculator.getEvent().PAYMENT;
    expect(payment).toEqual(result);
  });

  test.each([
    ['타파스-1,제로콜라-1', '없음'],
    ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1', '산타'],
  ])('총 혜택 금액에 따른 배지 증졍 여부 리턴', (input, result) => {
    const calculator = new Calculator('3', input);
    const badge = calculator.getEvent().BADGE;
    expect(badge).toEqual(result);
  });
});
