import { Outlet } from "react-router";
import { ChatContainer, ChatLayoutBase } from "./base.styles";
import { withAuth } from "../hoc/withAuth";
import socketContext from "../components/context/socketContext";

function ConnectionState({ isConnected }: { isConnected: boolean }) {
  return <p>State: {"" + isConnected}</p>;
}

const ChatLayout = () => {
  const { isConnected } = socketContext();

  return (
    <ChatLayoutBase>
      <ConnectionState isConnected={isConnected} />
      <ChatContainer>
        <Outlet />
      </ChatContainer>
    </ChatLayoutBase>
  );
};

export default withAuth(ChatLayout);
