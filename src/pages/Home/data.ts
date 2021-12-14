type TradeItem = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  interest?: number;
  chat?: number;
};

export const tradeItem: TradeItem[] = [
  {
    id: "pengu",
    imageUrl:
      "https://ssl.pstatic.net/imgshopping/cnsv/iu/home/21/1210/noz3el7qdnc.jpg",
    title: "올반 꿔바로우",
    location: "하남시",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
    interest: 30,
    chat: 53,
  },
  {
    id: "pingu",
    imageUrl:
      "https://ssl.pstatic.net/imgshopping/cnsv/iu/home/21/1210/noz3ekoqjd1.jpg",
    title: "넬리 소다세제",
    location: "상일동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
  },
  {
    id: "pongu",
    imageUrl:
      "https://ssl.pstatic.net/imgshopping/cnsv/iu/home/21/1210/noz3ennh9p8.jpg",
    title: "해태 맛동산",
    location: "둔촌동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
    interest: 95,
    chat: 1,
  },
  {
    id: "pangu",
    imageUrl:
      "https://ssl.pstatic.net/imgshopping/cnsv/iu/home/21/1209/noay2btnhsw.jpg",
    title: "따뜻한 램스퍼",
    location: "강동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
    interest: 42,
    chat: 1,
  },
  {
    id: "penku",
    imageUrl:
      "https://ssl.pstatic.net/imgshopping/cnsv/iu/home/21/1209/noay2c3di6w.jpg",
    title: "니트 원피스",
    location: "천호동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
    interest: 30,
  },
  {
    id: "pinku",
    imageUrl:
      "https://ssl.pstatic.net/imgshopping/cnsv/iu/home/21/1209/noay2cbrd9a.jpg",
    title: "사피아노 체인백",
    location: "마천동",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
  },
  {
    id: "ponku",
    imageUrl:
      "http://img.danawa.com/images/mobile/MDNW/mainContent/140/14076.jpg?ver=20211209182551&shrink=170:170",
    title: "크리스마스 트리",
    location: "용인시",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10000,
    interest: 600,
    chat: 1,
  },
  {
    id: "panku",
    imageUrl:
      "http://img.danawa.com/images/mobile/MDNW/mainContent/140/14015.jpg?ver=20211207163428&shrink=170:170",
    title: "롱패딩",
    location: "여의도",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 260000,
    interest: 30,
    chat: 1,
  },
  {
    id: "punku",
    imageUrl:
      "http://img.danawa.com/images/mobile/MDNW/mainContent/141/14143.jpg?ver=20211213164855&shrink=170:170",
    title: "패딩부츠",
    location: "김포시",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 20600,
  },
  {
    id: "pungu",
    imageUrl:
      "http://img.danawa.com/images/mobile/MDNW/mainContent/141/14103.jpg?ver=20211210165015&shrink=170:170",
    title: "킹왕짱든링",
    location: "올림픽공원",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 61560,
    interest: 990,
    chat: 3,
  },
];
