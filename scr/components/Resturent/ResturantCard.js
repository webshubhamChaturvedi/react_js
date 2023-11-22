import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/constant";
import { useRef } from "react";
const FoodCard = ({ resdata }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    // veg,
    costForTwo,
    // slugs,
    id,
    totalRatingsString,
    // promoted,
  } = resdata.info;
  const pageRef = useRef;

  // console.log(avgRating);
  return (
    <>
      {/* <Link to={`resturents/${slugs.restaurant}`}> */}
      <Link to={`resturents/${id}`}>
        <div className="food_tile">
          <img
            src={`${CDN_URL}/${cloudinaryImageId}`}
            alt={resdata.Imgurl}
            className="fda_product_img h-64"
          />
          <div className="cardDeatil">
            {/* {promoted} */}
            <div className=" flex align-middle justify-between">
              <span className="food_name">{name}</span>
              <span className=" ml-2 text-green-500 font-bold">
                {totalRatingsString}
              </span>
            </div>
            <h6>{cuisines}</h6>
            <h4>
              <label
                className="rating"
                style={{
                  backgroundColor:
                    +avgRating < 4
                      ? +avgRating < 3
                        ? "#ef3232"
                        : "#db7c38"
                      : "#48c479",
                }}
              >
                {avgRating} <i className="fa fa-star"></i>
              </label>
            </h4>
            <ul className=" mt-3">
              {/* <li>
                Category
                <span>{veg === "Ture" ? "Veg" : "Non-Veg"}</span>
              </li> */}
              <li className=" text-sm">
                Price
                <span className=" ml-2">
                  <i className="fa fa-inr"></i> {costForTwo}
                </span>
              </li>
              <li></li>
            </ul>
          </div>
          {/* <button
          type="button"
          className="btn btn-sm btn-default"
          id={btnfunction}
        >
          Order Now
        </button> */}
        </div>
      </Link>
    </>
  );
  // return resturent.map((list, i) => (
  //   <div className="col-9" key={list.itemId}>
  //     <div className="food_tile">
  //       {list.hasOwnProperty("url") ? (
  //         <img
  //           src={
  //             list.url !== ""
  //               ? list.url
  //               : `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`
  //           }
  //           alt="reslogo"
  //           className="fda_product_img"
  //         />
  //       ) : (
  //         <img
  //           src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`}
  //           alt="reslogo"
  //           className="fda_product_img"
  //         />
  //       )}
  //       <span className="food_name">{list.itemName}</span>
  //       <span className="food_detail">
  //         Triple schezuan rice, combines hakka noodles, fried rice, crisp
  //         noodles and ..
  //       </span>
  //       <h4>4.4 stars</h4>
  //       <ul id="food_meta">
  //         <li>
  //           Category
  //           <span>{list.category}</span>
  //         </li>
  //         <li>
  //           Price
  //           <span>
  //             <i className="fa fa-inr"></i> {list.price}
  //           </span>
  //         </li>
  //       </ul>
  //       <button type="button" className="btn btn-sm btn-default">
  //         Order Now
  //       </button>
  //     </div>
  //   </div>
  // ));
};

// export const ResturentPromotedCard = (FoodCard) => {
//   return (props) => {
//     const promated = props?.resdata?.data?.promoted;
//     return (
//       <>
//         <label className=" absolute  bg-black  rounded-e-md text-white z-10 text-sm px-3 py-1">
//           {promated && "Promoted"}
//         </label>
//         <FoodCard {...props} />
//       </>
//     );
//   };
// };

export default FoodCard;
