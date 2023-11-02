import React from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import data from "../../data.json";
export default function DetailsCun(props) {
  const urlId = useParams();
  const ShowDetails = data.filter((item) => {
    return item.name == urlId.idBox;
  });
  console.log(ShowDetails);

  return (
    <>
    <main className="m-6">
      <Link to={"../"}>
        <button className="flex items-center duration-200 bg-red-200 px-8 py-2  shadow-md text-lg capitalize  rounded group hover:bg-red-500 hover:text-white border-2 border-red-500 text-red-500 hover:border-white">
          <BiArrowBack className="group-hover:scale-150" />
          back
        </button>
      </Link>
      <div className="flex justify-between mt-24 max-md:mt-5 dark:text-white max-md:flex-col  ">
        <div className="w-[45%]  max-md:w-full
      "> 
          <img src={ShowDetails[0].flag} className={"w-full h-[42vh] max-md:p-1 max-md:h-[37vh]"} alt="" />
        </div>
        <div className="flex justify-evenly flex-col w-[40%] max-md:mt-4">
          <h1 className="text-4xl font-bold my-4 w-[max-content] max-md:text-2xl">{ShowDetails[0].name}</h1>
          <div className="grid grid-cols-2 list-none max-md:flex max-md:flex-col max-md:justify-between max-md:h-[30vh] ">
            <div>
              <li className="font-bold w-[max-content] text-lg capitalize">
                nativeName:
                <span className="font-light">{ShowDetails[0].nativeName}</span>
              </li>
              <li className="font-bold w-[max-content] text-lg capitalize">
                population:
                <span className="font-light">{ShowDetails[0].population}</span>
              </li>
              <li className="font-bold w-[max-content] text-lg capitalize">
                region:
                <span className="font-light">{ShowDetails[0].region}</span>
              </li>
              <li className="font-bold w-[max-content] text-lg capitalize">
                sub region:
                <span className="font-light">{ShowDetails[0].subregion}</span>
              </li>
              <li className="font-bold w-[max-content] text-lg capitalize">
              capital:
                <span className="font-light">{ShowDetails[0].capital}</span>
              </li>
            </div>
            <div>
              <li className="font-bold w-[max-content] text-lg capitalize">
                top Level Domain:
                <span className="font-light">
                  {ShowDetails[0].topLevelDomain}
                </span>
              </li>
              <li className="font-bold w-[max-content] text-lg capitalize">
                currencies:
                <span className="font-light">
                  {ShowDetails[0].currencies[0].name}
                </span>
              </li>
              <li className="font-bold w-[max-content] text-lg capitalize">
                languages:
                <span className="font-light">
                  {ShowDetails[0].languages[0].name}
                </span>
              </li>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
