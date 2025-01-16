import {
  MessageAvatar,
  MessageBox,
  MessageContainer,
  MessageContent,
  MessageUsername,
} from "./message.styles";
import { MessageProps } from "./message.types";

const Message = ({ username, message, origin = "sender" }: MessageProps) => {
  const isSystemMessage = origin === "system";

  return (
    <MessageContainer origin={origin}>
      {/* placeholder for now */}
      {!isSystemMessage && <MessageAvatar />}

      <MessageBox origin={origin}>
        {!isSystemMessage && <MessageUsername>{username}</MessageUsername>}
        <MessageContent>{message}</MessageContent>
      </MessageBox>
    </MessageContainer>
  );
};

export default Message;
