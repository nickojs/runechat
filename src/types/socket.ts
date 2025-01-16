export interface MessageObject {
  messageOrigin: string;
  message: string;
  timeStamp: Date;
  sockedId: string;
}

export const emptyMessageObject = {
  messageOrigin: "",
  message: "",
  timeStamp: new Date(),
  sockedId: "",
};
