import React from "react";

function PersonalInformation() {
  return (
    <ul className=" flex flex-col justify-between   mt-4  w-[900px]">

      <li className="flex  border rounded-t-2xl border-gray-200 justify-between p-3 w-[900px] ">
        <div className="flex flex-col gap-y-7">
          <h2 className="font-semibold">Personal Information</h2>

          <div className="flex gap-x-5 text-xs">
            <p className="text-gray-500">FIRST NAME</p>
            <p>Rohan</p>
          </div>
        </div>

        <div className="border h-8 border-gray-300 gap-x-1 px-1.5 py-1  items-center flex rounded-xl">
          <p className="text-[14px]">Edit</p>
          <img src="./pencil.svg" alt="pencil_svg" className="w-3" />
        </div>
      </li>

      <li className="flex border p-3 border-gray-200  justify-between w-[900px]">
       

          <div className="flex gap-x-6 text-xs">
            <p className="text-gray-500">LAST NAME</p>
            <p>Rohan</p>
          </div>
     
      
      </li>

      <li className="flex border p-3 border-gray-200  justify-between w-[900px]">
       

       <div className="flex gap-x-16 text-xs">
         <p className="text-gray-500">AGE</p>
         <p>35</p>
       </div>
  
   
   </li>
   
   <li className="flex border p-3 border-gray-200  justify-between w-[900px]">
       

       <div className="flex gap-x-10 text-xs">
         <p className="text-gray-500">GENDER</p>
         <p>Male</p>
       </div>
  
   
   </li>


   <li className="flex h-16 border p-3 border-gray-200 rounded-b-2xl justify-between w-[900px]">
       

       <div className="flex gap-x-20 text-xs">
         <p className="text-gray-500">ADDRESS</p>
         <p>2nd Floor, 99, 5th Cross Rd, 6th Block,<br></br> Koramangala, Bengaluru, Karnataka 560095</p>
       </div>
  
   
   </li>


      

      


    </ul>
  );
}

export default PersonalInformation;
