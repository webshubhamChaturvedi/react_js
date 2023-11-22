import React from "react";
import { CDN_URL } from "../../utils/constant";

const Cartlist = ({ list }) => {
  const { name, defaultPrice, imageId, price } = list.card.info;
  console.log(list);
  return (
    <>
      <div className="   border-b-2 py-5 px-2  last:border-b-0">
        <div className="flex items-center justify-between">
          <div className=" flex items-center">
            <img
              src={`${CDN_URL}/${imageId}`}
              className=" w-14 h-14 rounded-lg"
            />
            <span className=" ml-3">{name}</span>
          </div>
          <span>
            <span className=" mr-1"> ₹</span>
            {defaultPrice / 100 || price / 100}
          </span>
        </div>
      </div>
    </>
  );
};

export default Cartlist;
