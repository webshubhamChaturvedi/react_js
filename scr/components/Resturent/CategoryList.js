import React from "react";

import { CDN_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";

function CategoryList({ getCatData, theme }) {
  //Add Item handler
  const dispatch = useDispatch();

  const handleAddItem = (catdata) => {
    dispatch(addItem(catdata));
  };

  return (
    <div>
      {getCatData?.card?.card?.itemCards.map((catdata) => (
        <div
          className={`flex align-middle justify-between w-full border-b-2 mb-3 pb-2 mt-6 px-4`}
          key={catdata.card.info.id}
        >
          <div>
            <label
              className={` foodtype ${
                catdata.card.info.isVeg ? "veg" : "nonveg"
              }`}
            ></label>
            {catdata?.card?.info?.isBestseller ?? (
              <label className=" ml-2   text-green-500 text-sm align-top">
                <i className="fa fa-star  text-xs"></i> BestSeller
              </label>
            )}
            {/* <label className=" ml-2 ">
        {catdata?.card?.info?.isVeg ? "veg" : "nonveg"}
      </label> */}
            <h3 className=" text-md">{catdata?.card?.info?.name}</h3>
            <h5 className=" text-sm mt-1">
              <span className=" mr-1"> ₹</span>
              {Number(
                catdata?.card?.info?.price || catdata?.card?.info?.defaultPrice
              ) / 100}
            </h5>
            <small
              className={`${theme ? "text-gray-600" : " text-white"}  w-1/3`}
            >
              {catdata?.card?.info?.description}
              {/* {console.log(catdata?.card?.info)} */}
            </small>
          </div>
          <div className=" text-center">
            {/* {CDN_URL} */}
            {catdata.card.info.imageId && (
              <img
                src={`${CDN_URL}/${catdata.card.info.imageId}`}
                alt={catdata?.card?.info?.imageId}
                className=" h-20 rounded-md  w-24"
              />
            )}
            <button
              className={`${
                theme ? "bg-sky-200" : " bg-gray-600"
              } rounded-md py-2 px-3 text-sm  font-bold  w-24 mt-2 `}
              onClick={() => handleAddItem(catdata)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
