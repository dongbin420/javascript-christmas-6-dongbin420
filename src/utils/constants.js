export const INPUT_MESSAGE = Object.freeze({
  readDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  readMenu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});

export const OUTPUT_MESSAGE = Object.freeze({
  menu: '<주문 메뉴>',
  totalBeforeDiscount: '<할인 전 총주문 금액>',
  reward: '<증정 메뉴>',
  champagne: '샴페인 1개',
  none: '없음',
});

export const OTHER_MESSAGE = Object.freeze({
  dessert: '디저트',
  mainMenu: '메인',
});

export const MENU = Object.freeze({
  애피타이저: { 양송이수프: 6000, 타파스: 5500, 시저샐러드: 8000 },
  메인: { 티본스테이크: 55000, 바비큐립: 54000, 해산물파스타: 35000, 크리스마스파스타: 25000 },
  디저트: { 초코케이크: 15000, 아이스크림: 5000 },
  음료: { 제로콜라: 3000, 레드와인: 60000, 샴페인: 25000 },
});

export const NUMBER = Object.freeze({
  zero: 0,
  basePriceForReward: 120000,
  christmasDay: 25,
  eventStartDay: 1,
  dDayEventInitialDiscount: 1000,
  dDayEventIncreasePerDay: 100,
  sunday: 0,
  thursday: 4,
  friday: 5,
  saturday: 6,
  december: 11,
  dayEventDiscount: 2023,
  specialDayArr: [3, 10, 17, 24, 25, 31],
  specialDayDiscount: 1000,
  champagnePrice: 25000,
});

export const UTIL_STRING = Object.freeze({
  empty: '',
  comma: ',',
  dash: '-',
  lineBreak: '\n',
});
