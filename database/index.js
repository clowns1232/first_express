const book1 = {
  id: 1,
  title: "한 입 크기로 잘라 먹는 리액트",
  subTitle: "자바스크립트 기초부터 애플리케이션 배포까지",
  description:
    "자바스크립트 기초부터 애플리케이션 배포까지\n처음 시작하기 딱 좋은 리액트 입문서\n\n이 책은 웹 개발에서 가장 많이 사용하는 프레임워크인 리액트 사용 방법을 소개합니다. 인프런, 유데미에서 5000여 명이 수강한 베스트 강좌를 책으로 엮었습니다. 프런트엔드 개발을 희망하는 사람들을 위해 리액트의 기본을 익히고 다양한 앱을 구현하는 데 부족함이 없도록 만들었습니다. \n\n자바스크립트 기초 지식이 부족해 리액트 공부를 망설이는 분, 프런트엔드 개발을 희망하는 취준생으로 리액트가 처음인 분, 퍼블리셔나 백엔드에서 프런트엔드로 직군 전환을 꾀하거나 업무상 리액트가 필요한 분, 뷰, 스벨트 등 다른 프레임워크를 쓰고 있는데, 실용적인 리액트를 배우고 싶은 분, 신입 개발자이지만 자바스크립트나 리액트 기초가 부족한 분에게 유용할 것입니다.",
  author: "이정환",
};
const book2 = {
  id: 2,
  title: "러닝스쿨! 자바스크립트 첫걸음",
  subTitle: "처음 프로그래밍을 시작하는 입문자의 눈높이에 맞춘",
  description:
    "실무에 꼭 필요한 자바스크립트 필수 지식과 핵심 기술을 가장 쉽게 설명한 입문서!\n\n《러닝스쿨! 자바스크립트 첫걸음》은 자바스크립트의 기초부터 프런트엔드 개발의 최신 트렌드까지 웹 개발을 시작하려는 분들에게 필수적인 지식을 제공하는 책입니다. 현재 가장 인기 있는 기술인 React.js와 Next.js를 배우고 싶은 초보자부터, 이미 이 기술들을 다루고 있는 개발자 모두에게 적합합니다. \n\n실무에서 자주 사용되는 문법들을 위주로, 이해하기 쉬운 예제와 명확한 설명으로 기초적인 개념부터 심화 내용까지 단계별로 배울 수 있고, 이를 활용해 프로젝트를 개발하는 과정까지 다양한 예제와 친절한 설명으로 쉽게 이해할 수 있도록 도와주는 책입니다. 《러닝스쿨! 자바스크립트 첫걸음》을 통해 웹 개발에 첫걸음을 내딛어 보길 바랍니다.",
  author: "김효빈",
};
const book3 = {
  id: 3,
  title: "세상에서 가장 쉬운 코딩책",
  subTitle: "6개월 만에 비전공자에서 개발자가 된 위캔코딩의 기초 코딩 수업",
  description:
    "텀블벅 11,688% 펀딩 분야 1위, 와디즈 2,276% 펀딩 달성!\n진짜 6개월만 공부하면 개발자가 될 수 있다!\n비전공자도 단번에 이해하는 코딩 입문서\n\n우리는 디지털과는 떼려야 뗄 수 없는 일상을 살고 있다. 스마트폰으로 업무를 하고 키오스크로 메뉴를 주문하며 줌(ZOOM)으로 지구 반대편에서 열리는 콘퍼런스를 시청한다. 최근에는 챗GPT라는 대화형 AI가 출시되는 등 멀게만 느껴졌던 인공지능도 자연스럽게 일상에 들어오고 있다. 디지털 기술이 보편화되면 될수록 필요한 것이 기본 IT 지식이고, 그중에서도 실무적으로 많이 활용되는 것이 바로 코딩 능력이다.\n《세상에서 가장 쉬운 코딩책》은 코딩을 처음 배우는 사람을 위한 입문서다. 텀블벅 11,688%, 와디즈 2,276%의 펀딩 달성률을 기록하며 이미 코딩 전자책으로 입소문 난 책을 이번에 정식 출간한 것이다. 패션업계에 몸담고 있던 저자는 커리어점프를 위해 코딩을 공부하기로 마음먹었으나 시중에 나와 있는 코딩책이 어려워 좌절을 겪는다. 하지만 나름의 방법으로 코딩과 개발을 배워 IT회사에 입사했다. 이후 자신처럼 코딩에 어려움을 느끼는 사람을 위해 갖은 노하우와 쉬운 설명을 곁들여 이 책을 집필했다. 미래를 위해 개발자로 취직하려는 비전공자, 개발자와 일하기 위해 코딩을 알아야 하는 IT기업 종사자 등 이 책으로 코딩의 기초를 습득할 수 있을 것이다.",
  author: "위캔코딩",
};

const db = new Map();

db.set(1, book1);
db.set(2, book2);
db.set(3, book3);

module.exports = db;