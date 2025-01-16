export type Origin = "sender" | "receiver" | "system";

export interface MessageProps {
  username: string;
  message: string;
  origin: Origin;
}
