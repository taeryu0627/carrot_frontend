type ChatType = {
  id: string;
  sender: string;
  message: string;
  sendedAt: Date;
};

export const messages: ChatType[] = [
  {
    id: "message1",
    sender: "me",
    message: "안녕하세요.",
    sendedAt: new Date(),
  },
  {
    id: "message2",
    sender: "you",
    message: "안녕하세요.",
    sendedAt: new Date(),
  },
  {
    id: "message3",
    sender: "me",
    message: "물건 파시나요?",
    sendedAt: new Date(),
  },
  {
    id: "message4",
    sender: "you",
    message: "네 팔아요.",
    sendedAt: new Date(),
  },
  {
    id: "message5",
    sender: "me",
    message: "조금만 깎아주세요.",
    sendedAt: new Date(),
  },
  {
    id: "message6",
    sender: "you",
    message: "얼마나 깎아드릴까요?",
    sendedAt: new Date(),
  },
  {
    id: "message7",
    sender: "me",
    message: "3000원 밖에 없어서 15000원 깎아주세요.",
    sendedAt: new Date(),
  },
];
