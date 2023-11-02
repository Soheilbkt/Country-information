import React from "react";

export default function Lodingbox() {

  return (
    <>

      <div className="bg-white w-full mt-3 shadow-md rounded-md  group ">
        <div>
          <div className="bg-gray-200 rounded-lg w-full h-[21dvh] animate-pulse  ">
           
          </div>
          <div className="p-4">
            <div>
              <div    className="text-lg capitalize font-bold bg-gray-200 w-[80%] h-3 rounded-sm ">

              </div>
              <ul className="mt-1">
                <div className="bg-gray-200 h-2 w-[70%] rounded-sm mb-[2px]   animate-pulse"></div>
                <div className="bg-gray-200 h-2 w-[70%] rounded-sm mb-[2px]   animate-pulse"></div>
                <div className="bg-gray-200 h-2 w-[70%] rounded-sm mb-[2px]   animate-pulse"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
