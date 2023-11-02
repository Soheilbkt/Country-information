import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Boxcuntry(props) {
    const [Urlimg,setUrlimg] = useState("")
useEffect(() =>{
  fetch(props.flag).then(res =>  setUrlimg(res.url)).finally()
},[])
  return (

    <>
      <div className="bg-white dark:bg-gray-700 w-full mt-3 shadow-md rounded-md  group ">
        <div>
          <div className=" rounded-lg ">
            <img
              src={`${Urlimg}`}
              className="w-full h-[21dvh]
              
               scale-100 rounded-lg  group-hover:p-[0px] duration-500 "
               alt="is cun"
            />
          </div>
          <div className="p-4">
            <div className="dark:text-white">
              <h1
                className="text-lg capitalize font-bold "
                style={{ letterSpacing: "-1px" }}
              >
                {props.name}
              </h1>
              <ul className="mt-1">
                <li className="font-bold">
                Population:<span className="font-light">{props.population}</span>
                </li>
                <li className="font-bold">
                  Region:<span className="font-light">{props.region}</span>
                </li>
                <li className="font-bold">
                  Capital:<span className="font-light">{props.capital}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
