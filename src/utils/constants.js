export const INPUT_MESSAGE = Object.freeze({
  readDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  readMenu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  intro: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  secondIntro1: '12월',
  attention: '(주의사항)\n1. 총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.\n2. 음료만 주문 시, 주문할 수 없습니다.\n3. 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)\n',
  secondIntro2: '일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n',
  menu: '<주문 메뉴>',
  totalBeforeDiscount: '<할인 전 총주문 금액>',
  reward: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  totalBenefit: '<총혜택 금액>',
  expectedPayment: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
  champagne: '샴페인 1개',
  none: '없음',
  dDayDiscount: '크리스마스 디데이 할인',
  weekdayDiscount: '평일 할인',
  weekendDiscount: '주말 할인',
  specialDiscount: '특별 할인',
  rewardEvent: '증정 이벤트',
  star: '별',
  tree: '트리',
  santa: '산타',
});

export const OTHER_MESSAGE = Object.freeze({
  dessert: '디저트',
  mainMenu: '메인',
  drink: '음료',
});

export const ERROR_MESSAGE = Object.freeze({
  date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  dateInteger: '[ERROR] 날짜에 해당하는 정수를 입력해야 합니다. 다시 입력해주세요.',
  order: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  drink: '[ERROR] 음료만 주문 시, 주문이 불가능 합니다. 다시 입력해 주세요.',
  quantity: '[ERROR] 총 주문 가능 수량은 20개까지만 가능합니다! 다시 입력해 주세요.',
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
  basePriceForAllEvent: 10000,
  basePriceForStar: 5000,
  basePriceForTree: 10000,
  basePriceForSanta: 20000,
});

export const UTIL_STRING = Object.freeze({
  empty: '',
  comma: ',',
  dash: '-',
  lineBreak: '\n',
});
