// import { CDN_URL } from "../../../utils/constant";
import React, { useContext, useEffect, useState, useRef } from "react";
import CategoryList from "../CategoryList";
import { Newcontext } from "../../../utils/Context";
import { ThemeContext } from "../../Auth/AuthContext";
import { useRef } from "react";

const ResturentRecommCard = ({ getCatData, showItem, setOpenAcc }) => {
  const scrollToRef = useRef(null);
  // useEffect(() => {
  //   scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  // }, [scrollToRef]);

  const handleAccordian = () => {
    setOpenAcc();
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      console.log(scrollToRef.current);
    }
  };
  const mycontext = useContext(Newcontext);
  const themeChnage = useContext(ThemeContext);
  const themeData = themeChnage.theme;

  //   useEffect(() => {
  //     console.log(mycontext);
  //   }, []);

  //   console.log(getCatData);
  // console.log(themeData);

  return (
    <>
      <ThemeContext.Provider value={themeChnage}>
        <Newcontext.Provider value={getCatData}>
          <div className=" border-b-black pb-3  m-auto  w-2/4">
            <div
              key={getCatData?.card?.card?.title}
              className="mb-4 pb-6  "
              id={getCatData?.card?.card?.title}
            >
              <div
                className={`${
                  themeData ? "bg-slate-200" : " bg-gray-500"
                } px-4 py-2  rounded-md flex  align-middle  justify-between shadow-lg cursor-pointer`}
                onClick={handleAccordian}
                ref={scrollToRef}
              >
                <h3 className="text-xl ">
                  {getCatData?.card?.card?.title} (
                  {getCatData?.card?.card?.itemCards.length})
                </h3>
                <span>{showItem ? "-" : "+"}</span>
              </div>
              {showItem && (
                <CategoryList getCatData={getCatData} theme={themeData} />
              )}
            </div>
          </div>
        </Newcontext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default ResturentRecommCard;
