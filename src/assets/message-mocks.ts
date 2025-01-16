import { MessageObject } from "../types/socket";

export const mockedMessages = [
  {
    username: "system",
    message: "username has just entered the chat!",
    messageOrigin: "system",
    timeStamp: 1736991301484,
    socketId: "socket_1",
  },
  {
    username: "bob",
    message: "Thanks for the quick response!",
    messageOrigin: "receiver",
    timeStamp: 1736991301484,
    socketId: "socket_2",
  },
  {
    username: "alice",
    message: "What time works for you tomorrow?",
    messageOrigin: "receiver",
    timeStamp: 1736991301484,
    socketId: "socket_3",
  },
  {
    username: "ian",
    message: "I finished the project, take a look!",
    messageOrigin: "receiver",
    timeStamp: 1736991301484,
    socketId: "socket_4",
  },
  {
    username: "carol",
    message: "Can you help me with something?",
    messageOrigin: "sender",
    timeStamp: 1736991301484,
    socketId: "socket_1",
  },
  {
    username: "grace",
    message: "We should meet up sometime soon!",
    messageOrigin: "receiver",
    timeStamp: 1736991301484,
    socketId: "socket_5",
  },
  {
    username: "carol",
    message: "Let's catch up over the weekend.",
    messageOrigin: "sender",
    timeStamp: 1736991301484,
    socketId: "socket_1",
  },
  {
    username: "emma",
    message: "I have an idea I want to run by you.",
    messageOrigin: "receiver",
    timeStamp: 1736991301484,
    socketId: "socket_6",
  },
  {
    username: "frank",
    message: "Hey, how's it going?",
    messageOrigin: "receiver",
    timeStamp: 1736991301484,
    socketId: "socket_7",
  },
  {
    username: "carol",
    message: "Did you get my email?",
    messageOrigin: "sender",
    timeStamp: 1736991301484,
    socketId: "socket_1",
  },
] as unknown as MessageObject[];
