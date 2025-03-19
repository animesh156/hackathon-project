import React from "react";

function ContactInformation() {
  return (
    <ul className=" flex flex-col justify-between   mt-4  w-[900px]">
      <li className="flex  border rounded-t-2xl border-gray-200 justify-between p-3 w-[900px] ">
        <div className="flex flex-col gap-y-7">
          <h2 className="font-semibold">Contact Information</h2>

          <div className="flex gap-x-24 text-xs">
            <p className="text-gray-500">EMAIL</p>
            <p>Rakeshraushan@Gmail.Com</p>
          </div>
        </div>
      </li>

      <li className="flex border p-3 rounded-b-2xl border-gray-200  justify-between w-[900px]">
        <div className="flex gap-x-8 text-xs">
          <p className="text-gray-500">PHONE NUMBER</p>
          <p>+91 9922004856</p>
        </div>
      </li>
    </ul>
  );
}

export default ContactInformation;
