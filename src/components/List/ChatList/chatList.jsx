import React, { useState } from "react";

export const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="flex items-center gap-[20px] p-[20px]">
      <div className="flex items-center gap-[20px]">
        <div className="flex-1 bg-[rgba(17,25,40,0.25)] flex items-center gap-[20px] rounded-full p-3">
          <img className="w-[20px] h-[20px]" src="./search.png" alt="image" />
          <input
            className="bg-transparent border-none outline-none text-white flex-1"
            type="text"
            placeholder="Search"
          />
        </div>
        <img
          src={`${addMode ? "./minus.png" : "./plus.png"}`}
          alt="image"
          className="w-[36px] h-[36px] bg-[rgba(17,25,40,0.25)] p-2 rounded-[10px] cursor-pointer"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
    </div>
  );
};
