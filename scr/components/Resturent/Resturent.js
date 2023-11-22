// import FoodCard, { ResturentPromotedCard } from "./ResturantCard";
import FoodCard from "./ResturantCard";

// import resdata from "../../utils/mockdata";
import { useState, useEffect, useRef } from "react";
import Simmer from "../common/SimmerUI/Simmer";
import { RES_LIST } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatue";
import Nointernet from "../common/Nointernet";
import { useMemo } from "react";

//body component

const Body = () => {
  const [query, setQuery] = useState([]);
  const [FiltredRes, setFiltredRes] = useState([]);
  const [SeacrhText, useSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    ResList();
  }, []);

  const ResList = async () => {
    const data = await fetch(`${RES_LIST}`);
    const Json = await data.json();
    setQuery(
      Json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltredRes(
      Json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(query);
  };

  //Filter the Resturent by search
  const FilterResturent = (e) => {
    const filterdata = query.filter((arr) => {
      const name = arr.info.name ?? "";
      const searchValue = e.target.value ?? "";
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFiltredRes(filterdata);
  };

  //Filter the resturent by select
  const filterData = (e) => {
    if (e.target.value === "toprated") {
      const filterreddata = query.filter(
        (arrdata) => arrdata.info.avgRating >= 4
      );
      setFiltredRes(filterreddata);
    }
    if (e.target.value === "showAll") {
      setFiltredRes(query);
    }
  };
  // const ResturentcardProm = ResturentPromotedCard(FoodCard);

  // console.log(ResturentcardProm);
  //Use when we want to show loading if data is coming late
  return onlineStatus !== true ? (
    <Nointernet />
  ) : query?.length === 0 ? (
    <div className="fda_food_row">
      <Simmer />
    </div>
  ) : FiltredRes?.length === 0 ? (
    <div className="fda_food_row flex align-middle">
      No data
      <button
        className=" bg-sky-300 rounded-md px-4 py-2 ml-4"
        onClick={() => ResList()}
      >
        Back to Home
      </button>
    </div>
  ) : (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            value={SeacrhText}
            onChange={(e) => {
              useSearchText(e.target.value), FilterResturent(e);
            }}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={(e) => FilterResturent(e)}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div>
          {/* <button
            className="btn filter-btn"
            onClick={() => {
              const filterreddata = query.filter(
                (arrdata) => arrdata.data.avgRating >= 4
              );
              // setQuery(filterreddata);
              setFiltredRes(filterreddata);
            }}
          >
            Top Rating
          </button>

          <button
            className="btn filter-btn"
            onClick={() => {
              setFiltredRes(query);
            }}
          >
            Show All
          </button> */}
          <select
            className="border border-indigo-600 px-3 py-1 rounded-lg "
            onChange={(e) => {
              filterData(e);
            }}
          >
            <option value="showAll">Show All</option>

            <option value="toprated">Top Rating</option>
          </select>

          {/* {console.log(query)} */}
        </div>
      </div>

      <div className="resturentContainer fda_food_row">
        {console.log(FiltredRes)}
        {FiltredRes?.map((arrdata) => (
          <div className="col-9 w-full" key={arrdata.info.id}>
            {<FoodCard resdata={arrdata} />}
            {/* {arrdata.data.promoted ? (
              <ResturentcardProm resdata={arrdata} />
            ) : (
              <FoodCard resdata={arrdata} />
            )} */}
          </div>
        ))}
        {/* {query !== "Toprating"
          ? resdata.cards.map((arrdata) => (
              <FoodCard resdata={arrdata} key={arrdata.data.id} />
            ))
          : resdata.cards
              .filter((arrdata) => arrdata.data.avgRating >= 4)
              .map((arrdata) => (
                <FoodCard resdata={arrdata} key={arrdata.data.id} />
              ))} */}
      </div>
    </>
  );
};

export default Body;
