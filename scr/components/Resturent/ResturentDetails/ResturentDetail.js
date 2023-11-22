import React, { useEffect, useState } from "react";
import Simmer from "../../common/SimmerUI/Simmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../../../utils/useResturentMenu";
import ResturentRecommCard from "./ResturenReccomndedCard";

function ResturentDetail() {
  // const [resData, setResData] = useState(null);
  // const [add, setAdd] = useState(false);
  // useEffect(() => {
  //   // alert("useeffect");
  //   resApi();
  // }, []);
  const { resid } = useParams();
  const resData = useResturentMenu(resid); //custom hook for fetching data

  const [openAccor, setOpenAcc] = useState(0); //Accrodian of menu

  // console.log(useParams());

  // const resApi = async function () {
  //   const data = await fetch(`${RES_DETAIL}${resid}`);
  //   const output = await data.json();
  //   setResData(output.data);
  // };
  if (resData === null) {
    return (
      <div className="resdetail w-2/4">
        <Simmer />
      </div>
    );
  }

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = resData?.cards[0]?.card?.card?.info || {};
  const { gridElements } = resData?.cards[1]?.card?.card || {};
  const itemCards =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const recommendedCard = itemCards[1]?.card?.card?.itemCards;

  const getCatData = itemCards.filter(
    (cat) =>
      cat.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //Filterout the data based on itemCaterory

  return (
    <>
      <div className="resdetail w-2/4">
        <div className="orderHeading">
          <div>
            {/* <h6>{slugs}</h6> */}
            <h2 className="resname">{name}</h2>
            <h6 className="cusions">{cuisines?.join(",")}</h6>
          </div>
          <div className="orderdeatilHeading">
            <label
              className="rating"
              style={{
                color:
                  avgRating < 4
                    ? avgRating < 3
                      ? "#ef3232"
                      : "#db7c38"
                    : "#48c479",
              }}
            >
              <i className="fa fa-star"></i> {avgRating}
            </label>
            <label>{totalRatingsString}</label>
          </div>
        </div>
        <div className="timimg">
          <label>
            <i className="fa fa-clock"></i>
            {sla?.deliveryTime} Mins
          </label>
          <label>
            <i className="fa fa-coins"></i>
            {costForTwoMessage}
          </label>

          {/* {labels.map((arr) => {
          return <div key={arr?.title}>{arr?.title}</div>;
        })} */}
          {/* {gridElements.offers[0].cta.type} */}
        </div>
        <div className="offerSection">
          {gridElements?.infoWithStyle?.offers.map((item, ind) => (
            <div className="offerCommonSec" key={ind}>
              <button className="offerbtn">
                <div className="resOfferTop"> {item?.info?.header} </div>
                <div className="resofferBottom">
                  {item?.info?.couponCode}
                  <label>{item?.info?.description}</label>
                </div>
              </button>
            </div>
          ))}
        </div>
        {/* <div className="AllList">
          {console.log(gridElements)}
          {itemCards.map((list, index) => (
            //   <div>1</div>
            <div key={index}>
              {list?.card?.card?.vegOnlyDetails?.description}
            </div>
          ))}
        </div> */}
      </div>
      {getCatData.map((catList, index) => {
        return (
          <ResturentRecommCard
            getCatData={catList}
            key={catList.card.card.title}
            showItem={index === openAccor ? true : false}
            setOpenAcc={() => setOpenAcc(index)}
          />
        );
      })}
    </>
  );
}

export default ResturentDetail;
