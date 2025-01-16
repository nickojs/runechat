export interface MessageObject {
  messageOrigin: string;
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
