import { Origin } from "../components/message/message.types";

export interface MessageObject {
  messageOrigin: Origin;
  message: string;
  timeStamp: Date;
  socketId: string;
  username: string;
}

export interface MessagePayload {
  message: string;
  timeStamp: Date;
  socketId: string;
  username: string;
}

export const emptyMessageObject = {
  username: "",
  messageOrigin: "",
  message: "",
  timeStamp: new Date(),
  socketId: "",
};

export const messageObjBuilder = (
  message: string,
  socketId: string,
  username: string
): MessagePayload => {
  return {
    message,
    timeStamp: new Date(),
    socketId: socketId,
    username: username,
  };
};
