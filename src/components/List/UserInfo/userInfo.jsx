import React from "react";

export const UserInfo = () => {
  return (
    <div className="p-[20px] flex items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <img
          className="w-[50px] h-[50px] rounded-[50%] object-cover"
          src="./avatar.png"
          alt=""
        />
        <h1 className="text-base text-white font-semibold">Jaco</h1>
      </div>
      <div className="flex gap-[10px] cursor-pointer">
        <img
          className="w-[25px] h-[25px] rouded-full p-[5px] bg-slate-600 rounded-full"
          src="./more.png"
          alt=""
        />
        <img
          className="w-[25px] h-[25px] rouded-full p-[5px] bg-slate-600 rounded-full"
          src="./video.png"
          alt=""
        />
        <img
          className="w-[25px] h-[25px] rouded-full p-[5px] bg-slate-600 rounded-full"
          src="./edit.png"
          alt=""
        />
      </div>
    </div>
  );
};
