export type Origin = "sender" | "receiver";

export interface MessageProps {
  username: string;
  message: string;
  origin: Origin;
}
