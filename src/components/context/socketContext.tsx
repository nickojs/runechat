import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {
  tokenSelector,
  usernameSelector,
} from "../../store/auth/auth.selectors";
import { MessageObject, MessagePayload } from "../../types/socket";
import { addMessage, clearMessages } from "../../store/messages/messages.slice";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3003";

export interface SocketProps {
  isConnected: boolean;
  socketId: string;
  emitMessage: (data: any) => void;
}

const SocketContext = React.createContext<SocketProps>({} as SocketProps);

const socket = io(URL, { reconnection: true, autoConnect: false });

export const SocketProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isConnected, setConnected] = useState(false);
  const [socketId, setSocketId] = useState<string>("");
  const token = useSelector(tokenSelector);
  const username = useSelector(usernameSelector);
  const dispatch = useDispatch();

  const onConnect = () => {
    setConnected(true);
    setSocketId(socket.id as string);
    socket.emit("post-connection-data", {
      username,
      auth: token,
      socketId: socket.id,
    });
  };

  const onAdmMessage = (data: MessageObject) => {
    console.log(data);
    dispatch(addMessage(data));
  };

  const onReceiveMessage = ({ data }: { data: MessageObject[] }) => {
    const message = data[0];
    if (!message) return;
    dispatch(addMessage(message));
  };

  const onError = (error: any) => {
    console.log(
      "[SocketProvider] something went wrong : ",
      JSON.stringify(error)
    );
  };

  const onDisconnection = () => {
    setConnected(false);
    dispatch(clearMessages());
    console.log("user disconnected");
  };

  useEffect(() => {
    if (token && socket) {
      socket.connect();

      socket.on("connect", onConnect);
      socket.on("error", onError);
      socket.on("disconnect", onDisconnection);

      socket.on("adm_message", onAdmMessage);
      socket.on("message", onReceiveMessage);
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("adm_message", onAdmMessage);
      socket.off("error", onError);
      socket.off("disconnect", onDisconnection);
      socket.off("message", onReceiveMessage);
    };
  }, [socket, token]);

  useEffect(() => {
    console.log(socket.disconnected);
    if (socket.id) {
      setSocketId(socket.id);
    }
  }, [socket]);

  const emitMessage = (data: MessagePayload) => {
    socket.emit("message", data);
  };

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        socketId,
        emitMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default (): SocketProps => {
  const context = useContext(SocketContext);
  return context;
};
