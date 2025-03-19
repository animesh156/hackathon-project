import React from "react";

function PreferredLanguage() {
  return (
    <div className="flex flex-col border-gray-200 border rounded-2xl p-3 px-5   mt-4  w-[900px]">
      <li className="flex   border-gray-200 justify-between w-[900px] ">
        <h2 className="font-semibold">PreferredLanguage</h2>

        <div className="border h-8 border-gray-300 gap-x-1 px-1.5 py-1 mr-8  items-center flex rounded-xl">
          <p className="text-[14px]">Edit</p>
          <img src="./pencil.svg" alt="pencil_svg" className="w-3" />
        </div>
      </li>

      <div className="flex">
        <div className="border h-8 border-gray-300 gap-x-1 px-1.5 py-1 mr-8  rounded-xl">
          <p className="text-[14px]">English</p>
        </div>

        <div className="border h-8 border-gray-300 gap-x-1 px-2 py-1 mr-8  rounded-xl">
          <p className="text-[14px]">Hindi</p>
        </div>

      </div>
    </div>
  );
}

export default PreferredLanguage;
