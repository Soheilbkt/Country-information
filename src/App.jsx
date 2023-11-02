import { Suspense, useMemo, useState } from "react";
import data from "../data.json";
import "./App.css";
import TopNavBarComponent from "./components/TopNavBarComponent";
import { SlMagnifier } from "react-icons/sl";

import Boxcuntry from "./components/Boxcuntry";
import Lodingbox from "./components/LodingBox";

import { memo } from "react";
import { ImNotification } from "react-icons/im";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import DetailsCun from "./components/DetailsCun";

const LodingGrid = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-[3%] mt-3 m-6">
        <Lodingbox />
        <Lodingbox />
        <Lodingbox />
        <Lodingbox />
        <Lodingbox />
        <Lodingbox />
        <Lodingbox />
        <Lodingbox />
      </div>
    </>
  );
};

const App = memo(() => {
  const Routess = (
    <Routes>
      <Route path="/" />
      <Route path="/product/:idBox" element={<DetailsCun />} />
    </Routes>
  );
  const [valueInput, setvalueInput] = useState("");

  const [valueRigen, setvalueRigen] = useState("");
  const [Filtersdatas, setFiltersdatas] = useState([]);

  const loc = useLocation();
  const FilterCun = data.filter((item) => {
    return item.name.startsWith(valueInput);
  });
  useMemo(() => {
    setFiltersdatas(FilterCun.slice(0, 8));
  }, [valueInput]);

  return (
    <>
      <TopNavBarComponent />
      {Routess}

      {loc.pathname.length <= 1 ? (
        <main className="m-6  ">
          <div className="flex justify-between max-sm:flex-col  ">
            <div className="p-4 bg-white  dark:bg-gray-700 shadow-md rounded-md w-1/3 flex group-item max-sm:w-full max-md:w-[45%] max-lg:w-[45%] ">
              <div className="flex items-center flex-row-reverse w-[73%] justify-between max-md:w-full  ">
                <input
                  className="placeholder:text-sm placeholder:font-bold  outline-none   dark:bg-gray-700 dark:placeholder:text-white  dark:text-white  "
                  placeholder="serach for a country..."
                  value={valueInput}
                  onChange={(e) => {
                    setvalueInput(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                    );
                    !e.target.value ? setvalueRigen("") : "";
                  }}
                />
                <SlMagnifier className="w-5/12 h-5  text-gray-500 font-bold dark:text-white " />
              </div>
            </div>

            <div>
              <select
                id="countries"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                bg-white shadow-sm "
                value={valueRigen}
                onChange={(e) => {
                  setvalueRigen(!e.target.value ? "" : e.target.value);

                  setFiltersdatas((perv) => {
                    let FilterNew = perv.filter((item) => {
                      if (item.region == e.target.value) {
                        return item;
                      } else if (e.target.value == "") {
                        alert("s");
                        setvalueInput("");
                        return FilterCun.slice(0, 8);
                      }
                    });
                    return FilterNew;
                  });
                }}
              >
                <option value="">Choose a country</option>
                <option className="p-4 rounded-md  m-5 text-lg" value="Asia">
                  Asia
                </option>
                <option className="p-4 rounded-md  m-5 text-lg" value="Europe">
                  Europe
                </option>
                <option className="p-4 rounded-md  m-5 text-lg" value="Africa">
                  Africa
                </option>
                <option className="p-4 rounded-md  m-5 text-lg" value="Oceania">
                  Oceania
                </option>
                <option className="p-4  m-5 text-lg" value="Americas">
                  Americas
                </option>
              </select>
            </div>
          </div>
          <Suspense fallback={<h1>Loding....</h1>}>
            <div
              className="grid grid-cols-4 gap-[3%] mt-3 max-lg:grid-cols-3
            max-md:grid-cols-2 max-sm:grid-cols-1"
            >
              {Filtersdatas.map((item) => {
                return (
                  <Link key={item.name} to={`/product/${item.name}`}>
                    <Boxcuntry {...item} />
                  </Link>
                );
              })}
            </div>
          </Suspense>
          {Filtersdatas.length < 1 && (
            <h1 className="text-4xl w-full text-center m-auto dark:text-white flex flex-col items-center justify-between h-[26vh] ">
              <ImNotification className="text-[14vh] mt-3" />
              No country found!
            </h1>
          )}
        </main>
      ) : (
        ""
      )}
    </>
  );
});

export default App;
