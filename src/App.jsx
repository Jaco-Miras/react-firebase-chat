import React from "react";
import { ChatList } from "./components/ChatList";
import { Chat } from "./components/Chat";
import { Details } from "./components/Details";

const App = () => {
  return (
    <div className="flex">
      <ChatList />
      <Chat />
      {/* <Details /> */}
    </div>
  );
};

export default App;
