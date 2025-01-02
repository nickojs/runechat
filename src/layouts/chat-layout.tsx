import { ChatLayoutBase } from "./base.styles";
import { Outlet } from "react-router";

const ChatLayout = () => {
  return (
    <ChatLayoutBase>
      <Outlet />
    </ChatLayoutBase>
  );
};

export default ChatLayout;
