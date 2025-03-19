import React from "react";

function ProfileCard() {
  return (
    <div className=" ml-8 w-60 border flex flex-col items-center -mt-20 p-1.5 border-gray-200 bg-white rounded-2xl">
      <div className="avatar mt-6">
        <div className="w-24 rounded-full bg-gray-300"></div>
      </div>

      <h1 className="font-semibold mt-3">Rakesh Raushan</h1>

      <ul className="mt-4 mb-4 flex flex-col gap-y-3">
        <li className="flex items-center gap-x-4 bg-gray-100 w-52 p-2 px-4 rounded-xl">
          <p className="border border-gray-300 bg-gray-200  h-4 w-4 rounded-sm"></p>
          <h5 className=" font-semibold">Profile</h5>
        </li>

        <li className="flex items-center gap-x-4 p-2 px-4 ">
          <p className="border border-gray-300 bg-gray-200  h-4 w-4 rounded-sm"></p>
          <h5 className=" font-semibold">Education</h5>
        </li>

        <li className="flex items-center gap-x-4  p-2 px-4 ">
          <p className="border border-gray-300 bg-gray-200  h-4 w-4 rounded-sm"></p>
          <h5 className=" font-semibold">Work Experience</h5>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
