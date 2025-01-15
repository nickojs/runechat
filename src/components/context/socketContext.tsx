import React, { useContext, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3003";

export interface SocketProps {
  isConnected: boolean;
}

const SocketContext = React.createContext<SocketProps>({} as SocketProps);

export const SocketProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const socket = useMemo(() => io(URL), []);
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(true));
    socket.on("error", (err) => {
      console.log(
        "[SocketProvider] something went wrong : ",
        JSON.stringify(err)
      );
    });
  }, []);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
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
