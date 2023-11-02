import React, { memo, useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { BsFillMoonFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
const TopNavBarComponent = memo(() => {
  
  const [isToggled, setisToggled] = useState(false);
    
  useEffect(() => {
    localStorage.setItem("theme", isToggled);
    if (isToggled) {
        document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [isToggled]);
  return (
    <>
      <header className=" bg-white shadow-b p-3 capitalize  dark:bg-gray-700 dark:shadow-none      ">
        <nav className="flex flex-row justify-between m-4">
          <div>
            <h1 className="text-2xl font-bold dark:text-white max-sm:text-xl">
              where in the world?
            </h1>
          </div>
          <div className="duration-1000">
            <div
              className={`${
                isToggled ? "bg-hero-night" : "bg-hero-pattern"
              } bg-contain w-[9dvh] h-7 rounded-xl relative flex items-center duration-1000`}
              onClick={() => {
                setisToggled((prev) => !prev);
              }}
            >
              <div
                className={`w-6 h-6 scale-150   rounded-full absolute  bg-yellow-300  shadow-xl p-1 duration-1000
                 ${
                  isToggled ? "translate-x-[61px]" : "translate-x-[-12px]"
                }  
                 duration-1000 dark:bg-white`}
              >
                {isToggled ? (
                  <BsFillMoonFill className="w-full h-full duration-300" />
                ) : (
                  <LuSunMoon className="w-full h-full duration-300" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );

}
)
export default TopNavBarComponent