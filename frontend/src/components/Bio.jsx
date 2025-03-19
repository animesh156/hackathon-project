import React from "react";

function Bio() {
  return (
    <div className="flex flex-col border-gray-200 border rounded-2xl p-3 px-5   mt-4  w-[900px]">
      <li className="flex   border-gray-200 justify-between w-[900px] ">
        <h2 className="font-semibold">Bio</h2>

        <div className="border h-8 border-gray-300 gap-x-1 px-1.5 py-1 mr-8  items-center flex rounded-xl">
          <p className="text-[14px]">Edit</p>
          <img src="./pencil.svg" alt="pencil_svg" className="w-3" />
        </div>
      </li>

      <p className="text-sm">
        I'm a recent graduate with a passion for data. I'm eager to learn data
        analysis techniques and build a <br></br> strong foundation in this
        exciting field. I'm excited to explore the courses offered on
        Simplitrain and gain <br></br> the necessary skills to kickstart my data
        analyst career.
      </p>
    </div>
  );
}

export default Bio;
